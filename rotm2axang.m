% In this function, you need to convert the rotation matrix R into axis-angle form

function [axang] = rotm2axang(R)
    % Input Format
    % R will be a valid 3x3 rotation matrix with det(R) = 1
    % Output Format
    % vec will be a 1x3 matrix containing a single solution if only one solution exists in [0, pi]
    % vec will be a 2x3 matrix containing two solutions, if two solutions exist in [0, pi]
    % vec will be a 1x3 matrix of the form [NaN, NaN, NaN] if infinite solutions exist in [0, pi]
    % Every row in vec is of the form [x y z] if the vector is x i + y j + z k
    % theta is always a 1x1 matrix, and in radians
    % The final output is then to be stored in 'axang' as a 1x4 or 2x4 matrix where each row is of the form [x y z theta]   
    %% Your code starts here
    
 
    theta = acos(0.5*(trace(R) - 1));

    if abs(sin(theta)) > eps
    	vec = 0.5 / sin(theta) * [R(3,2)-R(2,3), R(1,3)-R(3,1), R(2,1)-R(1,2)];
    	axang = [vec, theta];
    elseif abs(theta) < eps
    	axang = [NaN, NaN, NaN, 0];
    else
    	
    	kx = sqrt(0.5*(R(1,1)+1));
       
        if abs(kx) > eps
            ky = R(2,1) / (2*kx);
            kz = R(3,1) / (2*kx);
            vec = [kx ky kz];
            
        else
            ky = sqrt(0.5*(R(2,2)+1));
            if abs(ky) > eps
                kz = R(3,2) / (2*ky);
                vec = [0 ky kz];
                
            else
                kz = sqrt(0.5*(R(3,3)+1));
                vec = [0 0 kz];
            end
        end

        axang = [vec, pi; -vec, pi];
    end
    	
    %% Your code ends here

end