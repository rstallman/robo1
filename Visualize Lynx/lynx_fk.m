function [ pos ] = lynx_fk( theta1, theta2, theta3, theta4, theta5, g )
%LYNX_FK The input to the function will be the joint
%    angles of the robot in radians, and the distance between the gripper pads in inches.
%    The output must contain 10 positions of various points along the robot arm as specified
%    in the question.

    %% YOUR CODE GOES HERE
    % pos = zeros(10, 4);
    % lynx robot params
    a = 3; b = 5.75; c = 7.375; d = 4.125; e = 1.125;
    
    % LINK 1 
    r1 = 0; alpha1 = -pi/2; d1 = a;
    T01 = compute_dh_matrix(r1, alpha1, d1, theta1);
    % LINK 2
    r2 = b; alpha2 = 0; d2 = 0; theta2 = theta2 - pi/2;
    T12 = compute_dh_matrix(r2, alpha2, d2, theta2);
    % LINK 3
    r3 = c; alpha3 = 0; d3 = 0; theta3 = theta3 + pi/2;
    T23 = compute_dh_matrix(r3, alpha3, d3, theta3);
    % LINK 4
    r4 = 0; alpha4 = -pi/2; d4 = 0;  theta4 = theta4 - pi/2;
    T34 = compute_dh_matrix(r4, alpha4, d4, theta4);
    % LINK 5
    r5 = 0; alpha5 = 0; d5 = d; 
    T45 = compute_dh_matrix(r5, alpha5, d5, theta5);

    T02 = T01 * T12; 
    T03 = T02 * T23;
    T04 = T03 * T34;
    T05 = T04 * T45;

    fr0 = [0 0 0];
    frHomo = T01*[0 0 0 1]';  fr1 = frHomo(1:3);
    frHomo = T02*[0 0 0 1]';  fr2 = frHomo(1:3);
    frHomo = T03*[0 0 0 1]';  fr3 = frHomo(1:3);
    frHomo = T04*[0 0 0 1]';  fr4 = frHomo(1:3);

    ptHomo = T05*[0 0 -e 1]';     pt1  = ptHomo(1:3);
    ptHomo = T05*[g/2 0 -e 1]';   pt2  = ptHomo(1:3);
    ptHomo = T05*[-g/2 0 -e, 1]'; pt3 = ptHomo(1:3);
    ptHomo = T05*[g/2 0 0 1]';    pt4 =  ptHomo(1:3);
    ptHomo = T05*[-g/2 0 0 1]';   pt5 =  ptHomo(1:3);
    pos = [fr0; fr1'; fr2'; fr3'; fr4'; pt1'; pt2'; pt3'; pt4'; pt5'];
end

function A = compute_dh_matrix(r, alpha, d, theta)

    % Your code from part 1 of the assignment goes here
     
    %% Your code goes here
    A = eye(4);
    
    A(1,1) = cos(theta); A(1,2) = -sin(theta)*cos(alpha); A(1,3) = sin(theta)*sin(alpha);  A(1,4) = r*cos(theta);
    A(2,1) = sin(theta); A(2,2) =  cos(theta)*cos(alpha); A(2,3) = -cos(theta)*sin(alpha); A(2,4) = r*sin(theta);
    A(3,1) = 0;          A(3,2) = sin(alpha);	          A(3,3) = cos(alpha);             A(3,4) = d;
    A(4,1) = 0;          A(4,2) = 0;                      A(4,3) = 0;                      A(4,4) = 1;
    
end