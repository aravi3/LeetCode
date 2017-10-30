def left_traverse(node, right_status = nil, arr = [])
    return if node.nil?
    left_traverse(node.left, false, arr)
    arr.push([node.val, right_status])
    left_traverse(node.right, true, arr)
    arr
end

def right_traverse(node, left_status = nil, arr = [])
    return if node.nil?
    right_traverse(node.right, false, arr)
    arr.push([node.val, left_status])
    right_traverse(node.left, true, arr)
    arr
end

def is_symmetric(root)
    return true if root.nil?
    left = left_traverse(root.left)
    right = right_traverse(root.right)
    left == right
end
