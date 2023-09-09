(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{464:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"day55-动态规划part15"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#day55-动态规划part15"}},[s._v("#")]),s._v(" Day55 动态规划part15")]),s._v(" "),n("h3",{attrs:{id:"判断子序列-leetcode-392"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断子序列-leetcode-392"}},[s._v("#")]),s._v(" 判断子序列 leetcode 392")]),s._v(" "),n("p",[s._v("题目：给定字符串 "),n("strong",[s._v("s")]),s._v(" 和 "),n("strong",[s._v("t")]),s._v(" ，判断 "),n("strong",[s._v("s")]),s._v(" 是否为 "),n("strong",[s._v("t")]),s._v(" 的子序列。")]),s._v(" "),n("p",[s._v("字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"),n("code",[s._v('"ace"')]),s._v("是"),n("code",[s._v('"abcde"')]),s._v("的一个子序列，而"),n("code",[s._v('"aec"')]),s._v("不是）。")]),s._v(" "),n("p",[n("strong",[s._v("进阶：")])]),s._v(" "),n("p",[s._v("如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？")]),s._v(" "),n("p",[n("strong",[s._v("致谢：")])]),s._v(" "),n("p",[s._v("特别感谢 "),n("a",{attrs:{href:"https://leetcode.com/pbrother/",target:"_blank",rel:"noopener noreferrer"}},[s._v("@pbrother "),n("OutboundLink")],1),s._v("添加此问题并且创建所有测试用例。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('输入：s = "abc", t = "ahbgdc"\n输出：true\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("示例 2：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('输入：s = "axc", t = "ahbgdc"\n输出：false \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("0 <= s.length <= 100")])]),s._v(" "),n("li",[n("code",[s._v("0 <= t.length <= 10^4")])]),s._v(" "),n("li",[s._v("两个字符串都只由小写字符组成。")])]),s._v(" "),n("p",[s._v("思路：和最长公共子序列一样，判断下长度返回就行了，直接秒了。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("确定DP数组以及下标含义: [0, i-1]的序列text1 与[0,j-1]的序列text2的最长公共子序列的长度为dp[i] [j]")])]),s._v(" "),n("li",[n("p",[s._v("确定递推公式：")])]),s._v(" "),n("li",[n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  if(text1[i - 1] == text2[j - 1])   \n    dp[i] [j] =  dp[i - 1] [j - 1] + 1;\n  else\n    dp[i][j] = max(dp[i][j - 1], dp[i - 1][j]);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("DP数组初始化:   dp[i] [j] = 0 //其实只要初始化第一行与第一列即可")])]),s._v(" "),n("li",[n("p",[s._v("确定遍历顺序:    从左往右，从上往下")])]),s._v(" "),n("li",[n("p",[s._v("打印DP数组： 用于debug")])])]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    bool isSubsequence(string s, string t) {\n        if (s.size() == 0)  return true;\n        int target = s.size();\n\n        vector<vector<int>> dp(s.size() + 1, vector<int>(t.size() + 1, 0));\n\n        for (int i = 1; i <= s.size(); ++i)\n        {\n            for (int j = 1; j <= t.size(); ++j)\n            {\n                if (s[i - 1] == t[j - 1]) \n                {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                }\n                else \n                {\n                    dp[i][j] = dp[i][j - 1];\n                }\n                if (dp[i][j] == target) return true;\n            }\n        }\n        return false;\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"不同的子序列-leetcode-115"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不同的子序列-leetcode-115"}},[s._v("#")]),s._v(" 不同的子序列 leetcode 115")]),s._v(" "),n("p",[s._v("题目：给你两个字符串 "),n("code",[s._v("s")]),s._v(" 和 "),n("code",[s._v("t")]),s._v(" ，统计并返回在 "),n("code",[s._v("s")]),s._v(" 的 "),n("strong",[s._v("子序列")]),s._v(" 中 "),n("code",[s._v("t")]),s._v(" 出现的个数，结果需要对 109 + 7 取模。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('输入：s = "rabbbit", t = "rabbit"\n输出：3\n解释：\n如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。\nrabbbit\nrabbbit\nrabbbit\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("strong",[s._v("示例 2：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('输入：s = "babgbag", t = "bag"\n输出：5\n解释：\n如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。 \nbabgbag\nbabgbag\nbabgbag\nbabgbag\nbabgbag \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("1 <= s.length, t.length <= 1000")])]),s._v(" "),n("li",[n("code",[s._v("s")]),s._v(" 和 "),n("code",[s._v("t")]),s._v(" 由英文字母组成")])]),s._v(" "),n("p",[s._v("思路：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("确定DP数组以及下标含义: 以i-1为结尾的s中有以j-1为结尾的t的个数为dp[i] [j]")])]),s._v(" "),n("li",[n("p",[s._v("确定递推公式：")])]),s._v(" "),n("li",[n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  if (s[i - 1] == t[j - 1]) {\n    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];\n  } else {\n    dp[i][j] = dp[i - 1][j];\n  }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("DP数组初始化:   dp[i] [j] = 0 //其实只要初始化第一行与第一列即可")])]),s._v(" "),n("li",[n("p",[s._v("确定遍历顺序:    从左往右，从上往下")])]),s._v(" "),n("li",[n("p",[s._v("打印DP数组： 用于debug")])]),s._v(" "),n("li",[n("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/115.%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%90%E5%BA%8F%E5%88%97.jpg"}})])]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    int numDistinct(string s, string t) {\n        vector<vector<uint64_t>> dp(s.size() + 1, vector<uint64_t>(t.size() + 1));\n        for (int i = 0; i < s.size(); ++i)  dp[i][0] = 1;\n        for (int j = 1; j < t.size(); ++j)  dp[0][j] = 0;\n\n        for (int i = 1; i <= s.size(); ++i)\n        {\n            for (int j = 1; j <= t.size(); ++j)\n            {\n                if (s[i - 1] == t[j - 1])\n                {\n                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];\n                }\n                else\n                {\n                    dp[i][j] = dp[i - 1][j];\n                }\n            }\n        }\n        return dp[s.size()][t.size()];\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);