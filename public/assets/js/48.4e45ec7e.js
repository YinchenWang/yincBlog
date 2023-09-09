(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{452:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"day44-动态规划part06"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#day44-动态规划part06"}},[s._v("#")]),s._v(" Day44 动态规划part06")]),s._v(" "),n("h3",{attrs:{id:"动态规划理论基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态规划理论基础"}},[s._v("#")]),s._v(" 动态规划理论基础")]),s._v(" "),n("p",[n("strong",[s._v("背包问题：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20210117171307407.png",alt:""}})]),s._v(" "),n("p",[n("strong",[s._v("完全背包：")])]),s._v(" "),n("p",[s._v("有N件物品和一个最多能背重量为W的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。"),n("strong",[s._v("每件物品都有无限个（也就是可以放入背包多次）")]),s._v("，求解将哪些物品装入背包里物品价值总和最大")]),s._v(" "),n("p",[n("strong",[s._v("完全背包和01背包问题唯一不同的地方就是，每种物品有无限件")]),s._v("。")]),s._v(" "),n("p",[s._v("背包最大重量为4。")]),s._v(" "),n("p",[s._v("物品为：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th"),s._v(" "),n("th",[s._v("重量")]),s._v(" "),n("th",[s._v("价值")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("物品0")]),s._v(" "),n("td",[s._v("1")]),s._v(" "),n("td",[s._v("15")])]),s._v(" "),n("tr",[n("td",[s._v("物品1")]),s._v(" "),n("td",[s._v("3")]),s._v(" "),n("td",[s._v("20")])]),s._v(" "),n("tr",[n("td",[s._v("物品2")]),s._v(" "),n("td",[s._v("4")]),s._v(" "),n("td",[s._v("30")])])])]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" // 先遍历物品，在遍历背包\nvoid test_CompletePack() {\n    vector<int> weight = {1, 3, 4};\n    vector<int> value = {15, 20, 30};\n    int bagWeight = 4;\n    vector<int> dp(bagWeight + 1, 0);\n    for(int i = 0; i < weight.size(); i++) { // 遍历物品\n        for(int j = weight[i]; j <= bagWeight; j++) { // 遍历背包容量\n            dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);\n        }\n    }\n    cout << dp[bagWeight] << endl;\n}\nint main() {\n    test_CompletePack();\n}\n\n// 先遍历背包，再遍历物品\nvoid test_CompletePack() {\n    vector<int> weight = {1, 3, 4};\n    vector<int> value = {15, 20, 30};\n    int bagWeight = 4;\n\n    vector<int> dp(bagWeight + 1, 0);\n\n    for(int j = 0; j <= bagWeight; j++) { // 遍历背包容量\n        for(int i = 0; i < weight.size(); i++) { // 遍历物品\n            if (j - weight[i] >= 0) dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);\n        }\n    }\n    cout << dp[bagWeight] << endl;\n}\nint main() {\n    test_CompletePack();\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h3",{attrs:{id:"零钱兑换ii-leetcode-518"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#零钱兑换ii-leetcode-518"}},[s._v("#")]),s._v(" 零钱兑换II leetcode 518")]),s._v(" "),n("p",[s._v("题目：给你一个整数数组 "),n("code",[s._v("coins")]),s._v(" 表示不同面额的硬币，另给一个整数 "),n("code",[s._v("amount")]),s._v(" 表示总金额。")]),s._v(" "),n("p",[s._v("请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 "),n("code",[s._v("0")]),s._v(" 。")]),s._v(" "),n("p",[s._v("假设每一种面额的硬币有无限个。")]),s._v(" "),n("p",[s._v("题目数据保证结果符合 32 位带符号整数。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：amount = 5, coins = [1, 2, 5]\n输出：4\n解释：有四种方式可以凑成总金额：\n5=5\n5=2+2+1\n5=2+1+1+1\n5=1+1+1+1+1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("strong",[s._v("示例 2：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：amount = 3, coins = [2]\n输出：0\n解释：只用面额 2 的硬币不能凑成总金额 3 。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("strong",[s._v("示例 3：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：amount = 10, coins = [10] \n输出：1 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("1 <= coins.length <= 300")])]),s._v(" "),n("li",[n("code",[s._v("1 <= coins[i] <= 5000")])]),s._v(" "),n("li",[n("code",[s._v("coins")]),s._v(" 中的所有值 "),n("strong",[s._v("互不相同")])]),s._v(" "),n("li",[n("code",[s._v("0 <= amount <= 5000")])])]),s._v(" "),n("p",[s._v("思路：")]),s._v(" "),n("ul",[n("li",[s._v("确定DP数组以及下标含义： 凑够背包容量为 j的背包 有dp[j]种方法")]),s._v(" "),n("li",[s._v("确定递推公式：dp[j] += dp[j - coins[i]].   //类似目标和那道题")]),s._v(" "),n("li",[s._v("DP数组初始化:   dp[0] = 1")]),s._v(" "),n("li",[s._v("确定遍历顺序:    先遍历物品后遍历背包")]),s._v(" "),n("li",[s._v("打印DP数组： 用于debug")])]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    int change(int amount, vector<int>& coins) {\n        vector<int> dp(amount + 1, 0);\n        dp[0] = 1;\n        for (int i = 0; i < coins.size(); ++i)\n        {\n            for (int j = coins[i]; j <= amount; j++)\n            {\n                dp[j] += dp[j - coins[i]];\n            }\n        }\n        return dp[amount];\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"组合总和iv-leetcode-377"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组合总和iv-leetcode-377"}},[s._v("#")]),s._v(" 组合总和IV leetcode 377")]),s._v(" "),n("p",[s._v("题目：给你一个由 "),n("strong",[s._v("不同")]),s._v(" 整数组成的数组 "),n("code",[s._v("nums")]),s._v(" ，和一个目标整数 "),n("code",[s._v("target")]),s._v(" 。请你从 "),n("code",[s._v("nums")]),s._v(" 中找出并返回总和为 "),n("code",[s._v("target")]),s._v(" 的元素组合的个数。")]),s._v(" "),n("p",[s._v("题目数据保证答案符合 32 位整数范围。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：nums = [1,2,3], target = 4\n输出：7\n解释：\n所有可能的组合为：\n(1, 1, 1, 1)\n(1, 1, 2)\n(1, 2, 1)\n(1, 3)\n(2, 1, 1)\n(2, 2)\n(3, 1)\n请注意，顺序不同的序列被视作不同的组合。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("strong",[s._v("示例 2：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：nums = [9], target = 3\n输出：0 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("1 <= nums.length <= 200")])]),s._v(" "),n("li",[n("code",[s._v("1 <= nums[i] <= 1000")])]),s._v(" "),n("li",[n("code",[s._v("nums")]),s._v(" 中的所有元素 "),n("strong",[s._v("互不相同")])]),s._v(" "),n("li",[n("code",[s._v("1 <= target <= 1000")])])]),s._v(" "),n("p",[s._v("思路：")]),s._v(" "),n("ul",[n("li",[s._v("确定DP数组以及下标含义：  "),n("strong",[s._v("凑成目标正整数为i的排列个数为dp[i]")])]),s._v(" "),n("li",[s._v("确定递推公式：dp[i] += dp[i - nums[j]];")]),s._v(" "),n("li",[s._v("DP数组初始化:   dp[0] = 1")]),s._v(" "),n("li",[s._v("确定遍历顺序:    先遍历背包后遍历物品 //排列")]),s._v(" "),n("li",[s._v("打印DP数组： 用于debug")])]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    int combinationSum4(vector<int>& nums, int target) {\n        vector<int> dp(target + 1, 0);\n        dp[0] = 1;\n        for (int i = 0; i <= target; ++i)\n        {\n            for (int j = 0; j < nums.size(); ++j)\n            {\n                if (i - nums[j] >= 0 && dp[i] < INT_MAX - dp[i - nums[j]]) \n                {\n                    dp[i] += dp[i - nums[j]];\n                }\n            }\n        }\n        return dp[target];\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);