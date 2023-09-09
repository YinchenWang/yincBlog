(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{465:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"day60-单调栈-part3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#day60-单调栈-part3"}},[s._v("#")]),s._v(" Day60 单调栈 part3")]),s._v(" "),t("h3",{attrs:{id:"柱状图中最大的矩形-leetcode-84"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#柱状图中最大的矩形-leetcode-84"}},[s._v("#")]),s._v(" 柱状图中最大的矩形 leetcode 84")]),s._v(" "),t("p",[s._v("题目：给定 "),t("em",[s._v("n")]),s._v(" 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。")]),s._v(" "),t("p",[s._v("求在该柱状图中，能够勾勒出来的矩形的最大面积。")]),s._v(" "),t("p",[t("strong",[s._v("示例 1:")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg",alt:"img"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：heights = [2,1,5,6,2,3]\n输出：10\n解释：最大的矩形为图中红色区域，面积为 10\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg",alt:"img"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入： heights = [2,4]\n输出： 4 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("1 <= heights.length <=105")])]),s._v(" "),t("li",[t("code",[s._v("0 <= heights[i] <= 104")])])]),s._v(" "),t("p",[s._v("思路: 每个柱子往左右寻找比他矮的柱子来确定矩形宽度，然后来计算面积。和接雨水相反，使用单调递减栈")]),s._v(" "),t("p",[s._v("需要在数组首尾添加0，可以避免单增数组导致找不到结果的情况。")]),s._v(" "),t("div",{staticClass:"language-C++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("class Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        int result = 0;\n        stack<int> st;\n        // 首尾添加0，可以避免单增数组导致找不到结果的情况\n        heights.insert(heights.begin(), 0); // 数组头部加入元素0\n        heights.push_back(0); // 数组尾部加入元素0\n        st.push(0);\n\n        // 第一个元素已经入栈，从下标1开始\n        for (int i = 1; i < heights.size(); i++) {\n            while (!st.empty() && heights[i] < heights[st.top()]) { \n                    int mid = st.top();\n                    st.pop();\n                    if (!st.empty()) {\n                        int left = st.top();\n                        int right = i;\n                        int w = right - left - 1;\n                        int h = heights[mid];\n                        result = max(result, w * h);\n                    }\n                }\n                st.push(i);\n        }\n        return result;\n    }\n};\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);