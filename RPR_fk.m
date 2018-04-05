function [ pos, R ] = RPR_fk( theta1, d2, theta3 )
%RPR_FK Write your code here. The input to the function will be the joint
%    angles of the robot in radians, and the extension of the prismatic joint in inches.
%    The output includes: 
%    1) The position of the end effector and the position of 
%    each of the joints of the robot, as explained in the question.
%    2) The rotation matrix R_03, as explained in the question.

    %% YOUR CODE GOES HERE
    
    
    % pos = zeros(4, 3);
    % R = eye(3);

    a = 10; b = 5;

    % LINK 1 
    r1 = 0; alpha1 = -pi*3/4; d1 = a;
    T01p = compute_dh_matrix(r1, alpha1, d1, theta1);
    T1p1 = compute_dh_matrix(0, 0, 0, -pi/2);
    T01 = T01p*T1p1;
    % LINK 2
    r2 = 0; alpha2 = -pi/2; theta2 = 0;
    T12 = compute_dh_matrix(r2, alpha2, d2, theta2);
    % LINK 3p
    r3 = 0; alpha3 = pi/2; d3 = 0; theta3 = theta3 + pi/4;
    T23p = compute_dh_matrix(r3, alpha3, d3, theta3);
    % LINK 3
    T3p3 = compute_dh_matrix(0, 0, b, pi/2);
    T23 = T23p*T3p3;

    T02 = T01 * T12; 
    T03 = T02 * T23;
    
    R = T03(1:3, 1:3);

    fr0 = [0 0 0];
    frHomo = T01*[0 0 0 1]';  fr1 = frHomo(1:3);
    frHomo = T02*[0 0 0 1]';  fr2 = frHomo(1:3);
    frHomo = T03*[0 0 0 1]';  fr3 = frHomo(1:3);

    pos = [fr0; fr1'; fr2'; fr3'];


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