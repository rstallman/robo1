% rand(3,1) generates a random 3 by one column vector. We use this u to plot
u=rand(3,1)*2-1;

% plot the origin
plot3(0,0,0,'.k')

% axis setting
axis vis3d
axis off
hold on
%%%%% your code starts here %%%%%
% generate a random rotation matrix R

q = rand(1,4);
q = q / norm(q);

e1 = q(2);
e2 = q(3);
e3 = q(4);
e4 = q(1);

R = [1-2*e2^2-2*e3^2, 2*(e1*e2-e3*e4), 2*(e1*e3+e2*e4);
     2*(e1*e2+e3*e4),  1-2*e1^2-2*e3^2, 2*(e2*e3-e1*e4);
     2*(e1*e3-e2*e4), 2*(e2*e3+e1*e4), 1-2*e1^2-2*e2^2];


% plot the x axis 
plot3([0,1],[0,0],[0,0],'r');
text(1,0,0,'x')

% plot the y axis 
plot3([0,0],[0,1],[0,0],'g');
text(0,1,0,'y')

% plot the z axis 
plot3([0,0],[0,0],[0,1],'b');
text(0,0,1,'z')

% plot the original vector u
plot3([0,u(1)],[0,u(2)],[0,u(3)], 'k--');
text(u(1),u(2), u(3),['(',num2str(u(1),'%.3f'),',',num2str(u(2),'%.3f'),',',num2str(u(3),'%.3f'),')']);

% apply rotation and calcuate v plot the vector after rotation v
v = R*u;

% plot the new vector v
plot3([0,v(1)], [0,v(2)], [0,v(3)], 'k:');
text(v(1),v(2),v(3),['(',num2str(v(1),'%.3f'),',',num2str(v(2),'%.3f'),',',num2str(v(3),'%.3f'),')']);

%%%%% your code ends here %%%%%