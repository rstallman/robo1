function q=quatprod(q1,q2)
    % All quaternions q, q1 and q2 are represented as 1-by-4 row vectors 
    q=zeros(1,4);
    
    %%%%% your code starts here %%%%%
   	u0 = q1(1);
   	u  = q1(2:end);
   	v0 = q2(1);
   	v  = q2(2:end);

    q(1) = u0*v0 - u * v';
    tmp  = u0*v + v0*u + cross(u, v);
    q(2) = tmp(1);
    q(3) = tmp(2);
    q(4) = tmp(3);
    %%%%% your code ends here %%%%%
    
end