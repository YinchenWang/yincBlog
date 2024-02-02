(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{452:function(s,n,e){"use strict";e.r(n);var a=e(2),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"day43-动态规划part05"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#day43-动态规划part05"}},[s._v("#")]),s._v(" Day43 动态规划part05")]),s._v(" "),n("h3",{attrs:{id:"动态规划理论基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态规划理论基础"}},[s._v("#")]),s._v(" 动态规划理论基础")]),s._v(" "),n("p",[n("strong",[s._v("什么是动态规划：")])]),s._v(" "),n("p",[s._v("Dynamic programming 简称DP，如果某一问题有很多重叠的子问题，使用动态规划最有效。")]),s._v(" "),n("p",[s._v("动态规划中每一个状态是由上一个状态推导出来的（区别于贪心，没有状态推导）")]),s._v(" "),n("p",[n("strong",[s._v("动态规划的解题步骤：")])]),s._v(" "),n("ul",[n("li",[s._v("确定DP数组以及下标含义")]),s._v(" "),n("li",[s._v("确定递推公式")]),s._v(" "),n("li",[s._v("DP数组初始化")]),s._v(" "),n("li",[s._v("确定遍历顺序")]),s._v(" "),n("li",[s._v("打印DP数组")])]),s._v(" "),n("p",[n("strong",[s._v("动态规划debug：")])]),s._v(" "),n("p",[s._v("最好方式是将DP数组打印出来，看是否是按照思路推导的。")]),s._v(" "),n("h3",{attrs:{id:"最后一块石头的重量ii-leetcode1049"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最后一块石头的重量ii-leetcode1049"}},[s._v("#")]),s._v(" 最后一块石头的重量II leetcode1049")]),s._v(" "),n("p",[s._v("题目：有一堆石头，用整数数组 "),n("code",[s._v("stones")]),s._v(" 表示。其中 "),n("code",[s._v("stones[i]")]),s._v(" 表示第 "),n("code",[s._v("i")]),s._v(" 块石头的重量。")]),s._v(" "),n("p",[s._v("每一回合，从中选出"),n("strong",[s._v("任意两块石头")]),s._v("，然后将它们一起粉碎。假设石头的重量分别为 "),n("code",[s._v("x")]),s._v(" 和 "),n("code",[s._v("y")]),s._v("，且 "),n("code",[s._v("x <= y")]),s._v("。那么粉碎的可能结果如下：")]),s._v(" "),n("ul",[n("li",[s._v("如果 "),n("code",[s._v("x == y")]),s._v("，那么两块石头都会被完全粉碎；")]),s._v(" "),n("li",[s._v("如果 "),n("code",[s._v("x != y")]),s._v("，那么重量为 "),n("code",[s._v("x")]),s._v(" 的石头将会完全粉碎，而重量为 "),n("code",[s._v("y")]),s._v(" 的石头新重量为 "),n("code",[s._v("y-x")]),s._v("。")])]),s._v(" "),n("p",[s._v("最后，"),n("strong",[s._v("最多只会剩下一块")]),s._v(" 石头。返回此石头 "),n("strong",[s._v("最小的可能重量")]),s._v(" 。如果没有石头剩下，就返回 "),n("code",[s._v("0")]),s._v("。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：stones = [2,7,4,1,8,1]\n输出：1\n解释：\n组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，\n组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，\n组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，\n组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("思路：")]),s._v(" "),n("p",[s._v("类似于分割等和数组，将重量尽量分为等重的两堆，然后砸石头。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("确定DP数组以及下标含义：装满容量为 j 的背包的最大重量为 dp[j]")])]),s._v(" "),n("li",[n("p",[s._v("确定递推公式： dp[j] = max(dp[j], dp[j - stones[i]] + stones[i]);")])]),s._v(" "),n("li",[n("p",[s._v("DP数组初始化:   dp数组初始化为0")])]),s._v(" "),n("li",[n("p",[s._v("确定遍历顺序:    从大往小遍历")])]),s._v(" "),n("li",[n("p",[s._v("打印DP数组： 用于debug")])])]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    int lastStoneWeightII(vector<int>& stones) {\n        if (stones.size() == 1) return stones[0];\n        vector<int> dp(15001, 0);\n        int sum = 0;\n        for (int i : stones)\n        {\n            sum += i;\n        }\n\n        int target = sum / 2;\n\n        for (int i = 0; i < stones.size(); ++i)\n        {\n            for (int j = target; j >= stones[i]; --j)\n            {\n                 dp[j] = max(dp[j], dp[j - stones[i]] + stones[i]);\n            }\n        }\n\n        return sum - dp[target] - dp[target];\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h3",{attrs:{id:"目标和-leetcode-494"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目标和-leetcode-494"}},[s._v("#")]),s._v(" 目标和 leetcode 494")]),s._v(" "),n("p",[s._v("题目：给你一个非负整数数组 "),n("code",[s._v("nums")]),s._v(" 和一个整数 "),n("code",[s._v("target")]),s._v(" 。")]),s._v(" "),n("p",[s._v("向数组中的每个整数前添加 "),n("code",[s._v("'+'")]),s._v(" 或 "),n("code",[s._v("'-'")]),s._v(" ，然后串联起所有整数，可以构造一个 "),n("strong",[s._v("表达式")]),s._v(" ：")]),s._v(" "),n("ul",[n("li",[s._v("例如，"),n("code",[s._v("nums = [2, 1]")]),s._v(" ，可以在 "),n("code",[s._v("2")]),s._v(" 之前添加 "),n("code",[s._v("'+'")]),s._v(" ，在 "),n("code",[s._v("1")]),s._v(" 之前添加 "),n("code",[s._v("'-'")]),s._v(" ，然后串联起来得到表达式 "),n("code",[s._v('"+2-1"')]),s._v(" 。")])]),s._v(" "),n("p",[s._v("返回可以通过上述方法构造的、运算结果等于 "),n("code",[s._v("target")]),s._v(" 的不同 "),n("strong",[s._v("表达式")]),s._v(" 的数目。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：nums = [1,1,1,1,1], target = 3\n输出：5\n解释：一共有 5 种方法让最终目标和为 3 。\n-1 + 1 + 1 + 1 + 1 = 3\n+1 - 1 + 1 + 1 + 1 = 3\n+1 + 1 - 1 + 1 + 1 = 3\n+1 + 1 + 1 - 1 + 1 = 3\n+1 + 1 + 1 + 1 - 1 = 3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("示例 2：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：nums = [1], target = 1\n输出：1 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("1 <= nums.length <= 20")])]),s._v(" "),n("li",[n("code",[s._v("0 <= nums[i] <= 1000")])]),s._v(" "),n("li",[n("code",[s._v("0 <= sum(nums[i]) <= 1000")])]),s._v(" "),n("li",[n("code",[s._v("-1000 <= target <= 1000")])])]),s._v(" "),n("p",[s._v("思路：")]),s._v(" "),n("p",[s._v("转换为左右两个序列，一个加 +号一个加-号，最后两个序列相加。如果left为正right为负，则 一定有 left - right = target  -> left - (sum - left) = target -> left = (target + sum) / 2.")]),s._v(" "),n("ul",[n("li",[s._v("确定DP数组以及下标含义： 装满容量为 j 的背包有dp[j]种方法")]),s._v(" "),n("li",[s._v("确定递推公式：dp[j] += dp[j - nums[i]]")]),s._v(" "),n("li",[s._v("DP数组初始化:   dp[0] = 1, 非0下标初始化为0")]),s._v(" "),n("li",[s._v("确定遍历顺序:    倒序")]),s._v(" "),n("li",[s._v("打印DP数组： 用于debug")])]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    int findTargetSumWays(vector<int>& nums, int S) {\n        int sum = 0;\n        for (int i = 0; i < nums.size(); i++) sum += nums[i];\n        if (abs(S) > sum) return 0; // 此时没有方案\n        if ((S + sum) % 2 == 1) return 0; // 此时没有方案\n        int bagSize = (S + sum) / 2;\n        vector<int> dp(bagSize + 1, 0);\n        dp[0] = 1;\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = bagSize; j >= nums[i]; j--) {\n                dp[j] += dp[j - nums[i]];\n            }\n        }\n        return dp[bagSize];\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"一和零-leetcode-474"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一和零-leetcode-474"}},[s._v("#")]),s._v(" 一和零 leetcode 474")]),s._v(" "),n("p",[s._v("题目：给你一个二进制字符串数组 "),n("code",[s._v("strs")]),s._v(" 和两个整数 "),n("code",[s._v("m")]),s._v(" 和 "),n("code",[s._v("n")]),s._v(" 。")]),s._v(" "),n("p",[s._v("请你找出并返回 "),n("code",[s._v("strs")]),s._v(" 的最大子集的长度，该子集中 "),n("strong",[s._v("最多")]),s._v(" 有 "),n("code",[s._v("m")]),s._v(" 个 "),n("code",[s._v("0")]),s._v(" 和 "),n("code",[s._v("n")]),s._v(" 个 "),n("code",[s._v("1")]),s._v(" 。")]),s._v(" "),n("p",[s._v("如果 "),n("code",[s._v("x")]),s._v(" 的所有元素也是 "),n("code",[s._v("y")]),s._v(" 的元素，集合 "),n("code",[s._v("x")]),s._v(" 是集合 "),n("code",[s._v("y")]),s._v(" 的 "),n("strong",[s._v("子集")]),s._v(" 。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3\n输出：4\n解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。\n其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("示例 2：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('输入：strs = ["10", "0", "1"], m = 1, n = 1\n输出：2\n解释：最大的子集是 {"0", "1"} ，所以答案是 2 。 \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("1 <= strs.length <= 600")])]),s._v(" "),n("li",[n("code",[s._v("1 <= strs[i].length <= 100")])]),s._v(" "),n("li",[n("code",[s._v("strs[i]")]),s._v(" 仅由 "),n("code",[s._v("'0'")]),s._v(" 和 "),n("code",[s._v("'1'")]),s._v(" 组成")]),s._v(" "),n("li",[n("code",[s._v("1 <= m, n <= 100")])])]),s._v(" "),n("p",[s._v("思路：")]),s._v(" "),n("ul",[n("li",[s._v("确定DP数组以及下标含义： "),n("strong",[s._v("最多有i个0和j个1的strs的最大子集的大小为dp[i] [j]")])]),s._v(" "),n("li",[s._v("确定递推公式：dp[i] [j] = max(dp[i] [j], dp[i - zeroNum] [j - oneNum] + 1)")]),s._v(" "),n("li",[s._v("DP数组初始化:   初始化为0")]),s._v(" "),n("li",[s._v("确定遍历顺序:    外层for循环遍历物品，内层for循环遍历背包容量且从后向前遍历！")]),s._v(" "),n("li",[s._v("打印DP数组： 用于debug")])]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    int findMaxForm(vector<string>& strs, int m, int n) {\n        vector<vector<int>> dp(m + 1, vector<int> (n + 1, 0)); // 默认初始化0\n        for (string str : strs) { // 遍历物品\n            int oneNum = 0, zeroNum = 0;\n            for (char c : str) {\n                if (c == '0') zeroNum++;\n                else oneNum++;\n            }\n            for (int i = m; i >= zeroNum; i--) { // 遍历背包容量且从后向前遍历！\n                for (int j = n; j >= oneNum; j--) {\n                    dp[i][j] = max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);\n                }\n            }\n        }\n        return dp[m][n];\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);