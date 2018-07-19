function route = ShortestPathDijkstra (edges, edge_lengths, start, dest)
% This function finds the shortest path through a graph using Dijkstra's
% algorithm. The first input, map is a sparse matrix whose entries
% indicate the distance values all of which must be greater than zero
% source and dest indicate the indices of the start and destination nodes.


% Construct a sparse matrix using the information in edges and
% edge_distances

if (any(edge_lengths <= 0))
    error ('Edge Distances cannot be less than or equal to zero');
end

i = edges(:,1);
j = edges(:,2);

map = sparse([i,j], [j,i], [edge_lengths, edge_lengths]);

% Figure out the number of nodes
n = size(map,1);

if ((start > n) || (dest > n))
    % This could happen if the start or end node has no edges
    route = [];
    return;
end

% Initialization
distances = Inf(n,1);
parent = NaN(n,1);

distances(start) = 0;
parent(start) = 0;

while true
    % Find the node with the smallest distance
    [min_dist,idx] = min(distances);
    
    if ((idx == dest) || isinf(min_dist))
       break;
    end
    
    i = find(map(idx,:));
    
    % ********************************************************************* 
    % YOUR CODE BETWEEN THESE LINES OF STARS
    
    % Visit each neighbor of the current node and update the map, distances
    % and parent tables appropriately.
    
    for ii = i
        if distances(ii) > map(idx, ii) + min_dist;
            distances(ii) = map(idx, ii) + min_dist;
            parent(ii) = idx;
        end
    end
   
    % set distance to nan, inoder to prevent next time will extract min. not good, but works!!!!
    distances(idx) = nan;

    %*********************************************************************

end

% Construct the route
if (isinf(distances(dest)))
    route = [];
else
    route = [dest];
    
    while (parent(route(1)) ~= 0)
        route = [parent(route(1)), route];
    end
end

