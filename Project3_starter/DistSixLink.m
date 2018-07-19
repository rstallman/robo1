function out = DistSixLink (x1, x2)
% Compute the distance between two sets of six link coordinates
% Note we assume all angular coordinates are between 0 and 360
% Use sum of the absolute value of angle difference (L1 norm) as the
% distance.
% Note this is angle difference.
% i.e. DistSixLink([0, 0, 0, 0, 0, 0], [360, 360, 360, 360, 360, 360]) = 0
% since x2 and x1 might be of different dimension, so use bsxfun
% for example x1 =[1;2], x2=[1, 3; 5 6]
	e = abs(bsxfun(@minus, x2, x1));
	out = sum(min(e, 360-e));
end
