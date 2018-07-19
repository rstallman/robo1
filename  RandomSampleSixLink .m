function x = RandomSampleSixLink (obstacle)
% Generate a random freespace configuration for the robot
% Hint: use CollisionCheck(fv, obstacle) to check if the configuration is
% in freespace.

    
    while true
        x = 360*rand(6,1);
        
        fv = SixLinkRobot (x);
        
        if (~CollisionCheck(fv, obstacle))
            return
        end

    end

end

function flag = triangle_intersection(P1, P2)
% triangle_test : returns true if the triangles overlap and false otherwise

%%% All of your code should be between the two lines of stars.
% *******************************************************************


	checkOrder  = [1, 2, 3; 2, 3, 1; 1, 3, 2];
	for i = 1 : 3
		tmp = checkOrder(i, :);
		firstRow = tmp(1); secondRow = tmp(2); checkRow = tmp(3);
		
		apex1 = P1(firstRow,:);   apex2 = P1(secondRow,:);	
		x0 = apex1(1); y0 = apex1(2); 
		x1 = apex2(1); y1 = apex2(2);


		[form, lineFunc] = lineEquation(x0, y0, x1, y1);


		if checkTriangle(form, lineFunc, P2, P1(checkRow, :))
			flag = false;
			return;
		end	
	end

 
        PP2 = P1;
	PP1 = P2;

	for i = 1 : 3
		tmp = checkOrder(i, :);
		firstRow = tmp(1); secondRow = tmp(2); checkRow = tmp(3);
		
		apex1 = PP1(firstRow,:);   apex2 = PP1(secondRow,:);	
		x0 = apex1(1); y0 = apex1(2); 
		x1 = apex2(1); y1 = apex2(2);


		[form, lineFunc] = lineEquation(x0, y0, x1, y1);
	

		if checkTriangle(form, lineFunc, PP2, PP1(checkRow, :))
			flag = false;
			return;
		end	
	end
 
 
 
	flag = true;

% *******************************************************************
end


function flag = checkTriangle(form, lineFunc, P, checkP)
% check whether a tiangle lies same side of a line
% input: form, if form == 0 then use y = k*x + b, form == 1, use x = k*y + b, form == -1, failure
% input:  a function handle
% input: P, triangle points, a 3*2 matrix
% output: flag, if pass , flag == true, otherwise false

	apex1 = P(1,:);   apex2 = P(2,:); apex3 = P(3, :);

	x0 = apex1(1); y0 = apex1(2); 
	x1 = apex2(1); y1 = apex2(2);
	x2 = apex3(1); y2 = apex3(2);
	xp = checkP(1); yp = checkP(2);

	flag = false; 

	if form == 0
		yy0 = lineFunc(x0);
		yy1 = lineFunc(x1);
		yy2 = lineFunc(x2);
		yyp = lineFunc(xp);
		deltaY0 = yy0 - y0;
		deltaY1 = yy1 - y1;
		deltaY2 = yy2 - y2;		
		deltaYp = yyp - yp;
		
		if (deltaY0 > 0 && deltaY1 > 0 && deltaY2 > 0 && deltaYp < 0) || ...
			(deltaY0 < 0 && deltaY1 < 0 && deltaY2 < 0 && deltaYp > 0)			
			
			flag = true;			
		end
	elseif  form == 1
		xx0 = lineFunc(y0);
		xx1 = lineFunc(y1);
		xx2 = lineFunc(y2);
		xxp = lineFunc(yp);
		deltaX0 = xx0 - x0;
		deltaX1 = xx1 - x1;
		deltaX2 = xx2 - x2;
		deltaXp = xxp - xp;

		if (deltaX0 > 0 && deltaX1 > 0 && deltaX2 > 0 && deltaXp < 0) || ...
			(deltaX0 < 0 && deltaX1 < 0 && deltaX2 < 0 && deltaXp > 0)
			
			flag = true;		
		end			
	end

end


function [form, lineFunc] = lineEquation(x0, y0, x1, y1)
% find line equation by two points
% input: x0, y0, x1, y1, x and y coords of two points
% output: form, if form == 0 then use y = k*x + b, form == 1, use x = k*y + b, form == -1, failure
% lineFunc: a function handle

	deltaX = x1 - x0;
	deltaY = y1 - y0;

	if abs(deltaX) <= eps && abs(deltaY) <= eps
		form = -1;
		disp('p0 == p1, please input two different points!');
	end

	if deltaX >= deltaY
		form = 0;
		k = deltaY / deltaX;
		b = y0 - k*x0;
		lineFunc = @(x) k*x + b;
	else
		form = 1;
		k = deltaX / deltaY;
		b = x0 - k*y0;
		lineFunc = @(y) k*y + b;
	end	
end




