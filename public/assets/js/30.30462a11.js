(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{434:function(s,n,e){"use strict";e.r(n);var t=e(2),r=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"day23-二叉树-part09"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#day23-二叉树-part09"}},[s._v("#")]),s._v(" Day23 二叉树 part09")]),s._v(" "),n("p",[n("strong",[s._v("二叉树的深度：")]),s._v(" 指从根节点到该节点的最长简单路径边的条数或者节点数（取决于深度从0开始还是从1开始）（通常用前序求）")]),s._v(" "),n("p",[n("strong",[s._v("二叉树的高度：")]),s._v(" 指从该节点到叶子节点的最长简单路径边的条数或者节点数（取决于高度从0开始还是从1开始）（通常用后序求）")]),s._v(" "),n("h3",{attrs:{id:"修建二叉搜索树-leetcode-669"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修建二叉搜索树-leetcode-669"}},[s._v("#")]),s._v(" 修建二叉搜索树 leetcode 669")]),s._v(" "),n("p",[s._v("题目：给你二叉搜索树的根节点 "),n("code",[s._v("root")]),s._v(" ，同时给定最小边界"),n("code",[s._v("low")]),s._v(" 和最大边界 "),n("code",[s._v("high")]),s._v("。通过修剪二叉搜索树，使得所有节点的值在"),n("code",[s._v("[low, high]")]),s._v("中。修剪树 "),n("strong",[s._v("不应该")]),s._v(" 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 "),n("strong",[s._v("唯一的答案")]),s._v(" 。")]),s._v(" "),n("p",[s._v("所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://assets.leetcode.com/uploads/2020/09/09/trim1.jpg",alt:"img"}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：root = [1,0,2], low = 1, high = 2\n输出：[1,null,2]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("思路：本题需要注意的是，当某个节点的值小于low时，删除该节点，但该节点的右子树可能还有符合要求的节点，同理节点大于high时。此时，需要再对其对应子树进行递归修剪（不能直接返回该子树头节点就完事，因为该子树不是所有节点都绝对满足条件）。")]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* trimBST(TreeNode* root, int low, int high) {\n        if(root == nullptr) return nullptr;\n        if(root -> val < low)\n        {\n            return trimBST(root -> right, low, high);\n        }\n        if(root -> val > high)\n        {\n            return trimBST(root -> left, low, high);\n        }\n        root -> left = trimBST(root -> left, low, high);\n        root -> right = trimBST(root -> right, low, high);\n        return root;\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h3",{attrs:{id:"将有序数组转换为二叉搜索树-leetcode-108"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将有序数组转换为二叉搜索树-leetcode-108"}},[s._v("#")]),s._v(" 将有序数组转换为二叉搜索树 leetcode 108")]),s._v(" "),n("p",[s._v("题目：给你一个整数数组 "),n("code",[s._v("nums")]),s._v(" ，其中元素已经按 "),n("strong",[s._v("升序")]),s._v(" 排列，请你将其转换为一棵 "),n("strong",[s._v("高度平衡")]),s._v(" 二叉搜索树。")]),s._v(" "),n("p",[n("strong",[s._v("高度平衡")]),s._v(" 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg",alt:"img"}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：nums = [-10,-3,0,5,9]\n输出：[0,-3,9,-10,null,5]\n解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg",alt:""}})]),s._v(" "),n("p",[s._v("思路：由于要求构造的是平衡二叉搜索树，因此默认取数组中间节点为头节点，进行构造即可。")]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\nprivate:\n    TreeNode* traversal(vector<int>& nums, int left, int right)\n    {\n        if(left > right)    return nullptr;\n        int mid = left + ((right - left) / 2);\n        TreeNode * root = new TreeNode(nums[mid]);  //取得中间节点\n        root -> left = traversal(nums, left, mid - 1);\n        root -> right = traversal(nums, mid + 1, right);\n        return root;\n    }\npublic:\n    TreeNode* sortedArrayToBST(vector<int>& nums) {\n        return traversal(nums, 0, nums.size() - 1);\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("把二叉搜索树转换成累加树 leetcode 538")]),s._v(" "),n("p",[s._v("题目：给出二叉 "),n("strong",[s._v("搜索")]),s._v(" 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 "),n("code",[s._v("node")]),s._v(" 的新值等于原树中大于或等于 "),n("code",[s._v("node.val")]),s._v(" 的值之和。")]),s._v(" "),n("p",[s._v("提醒一下，二叉搜索树满足下列约束条件：")]),s._v(" "),n("ul",[n("li",[s._v("节点的左子树仅包含键 "),n("strong",[s._v("小于")]),s._v(" 节点键的节点。")]),s._v(" "),n("li",[s._v("节点的右子树仅包含键 "),n("strong",[s._v("大于")]),s._v(" 节点键的节点。")]),s._v(" "),n("li",[s._v("左右子树也必须是二叉搜索树。")])]),s._v(" "),n("p",[s._v("**注意：**本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/ 相同")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("p",[n("strong",[n("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/05/03/tree.png",alt:"img"}})])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("思路：思路正确，使用反向的中序遍历进行累加即可。注意双指针的应用！！")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\nprivate:\n    int pre = 0;\n    void traversal(TreeNode* cur)\n    {\n        if(cur == nullptr)  return;\n        traversal(cur -> right);\n        cur -> val += pre;\n        pre = cur -> val;\n        traversal(cur -> left);\n    }\npublic:\n    TreeNode* convertBST(TreeNode* root) {\n        pre = 0;\n        traversal(root);\n        return root;\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);