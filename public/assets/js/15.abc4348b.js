(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{421:function(s,n,e){"use strict";e.r(n);var t=e(2),a=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"day06-哈希表part01"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#day06-哈希表part01"}},[s._v("#")]),s._v(" day06 哈希表part01")]),s._v(" "),n("h3",{attrs:{id:"有效的字母异位词-leetcode-242"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#有效的字母异位词-leetcode-242"}},[s._v("#")]),s._v(" 有效的字母异位词 leetcode 242")]),s._v(" "),n("p",[s._v("题目：给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。")]),s._v(" "),n("p",[s._v("注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。")]),s._v(" "),n("p",[s._v("示例 1:")]),s._v(" "),n("p",[s._v('输入: s = "anagram", t = "nagaram"\n输出: true')]),s._v(" "),n("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode.cn/problems/valid-anagram\n著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。。")]),s._v(" "),n("h4",{attrs:{id:"哈希表法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#哈希表法"}},[s._v("#")]),s._v(" 哈希表法")]),s._v(" "),n("p",[s._v("数组就是一个最简单的哈希表，创建一个包含26字母的数组letters，将字符串s映射到上面，对应位置+1，再将字符串t映射到上面，对应位置-1，最后查看letters的值是否全部为0。")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        int letters[26] = { 0 };\n        int i, sum = 0;\n        for(i=0; i<s.size(); i++)\n        {\n            letters[s[i] - 'a']++;\n        }\n        for(i=0; i<t.size(); i++)\n        {\n            letters[t[i] - 'a']--;\n        }\n        for(i=0; i<26; i++)\n        {\n            if(letters[i] != 0)\n                return false;\n        }\n        return true;\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"两个数组的交集-leetcode-349"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两个数组的交集-leetcode-349"}},[s._v("#")]),s._v(" 两个数组的交集 leetcode 349")]),s._v(" "),n("p",[s._v("题目：给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。")]),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[s._v("输入：nums1 = [1,2,2,1], nums2 = [2,2]\n输出：[2]\n示例 2：")]),s._v(" "),n("p",[s._v("输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]\n输出：[9,4]\n解释：[4,9] 也是可通过的")]),s._v(" "),n("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode.cn/problems/intersection-of-two-arrays\n著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。")]),s._v(" "),n("p",[s._v("考虑使用哈希表来解决。所以类似查找某个元素是否存在某个容器中的题目都可使用哈希表快速求解。")]),s._v(" "),n("p",[s._v("C++提供了数组，set，map三种哈希表数据结构。这里使用set中的unordered_set最好。其底层通过hash table实现，同时可以自动去重。")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {\n        unordered_set<int> result_set; // 存放结果，之所以用set是为了给结果集去重\n        unordered_set<int> nums_set(nums1.begin(), nums1.end());\n        for (int num : nums2) {\n            // 发现nums2的元素 在nums_set里又出现过\n            if (nums_set.find(num) != nums_set.end()) {\n                result_set.insert(num);\n            }\n        }\n        return vector<int>(result_set.begin(), result_set.end());\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"快乐数-leetcode-202"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快乐数-leetcode-202"}},[s._v("#")]),s._v(" 快乐数 leetcode 202")]),s._v(" "),n("p",[s._v("题目：编写一个算法来判断一个数 n 是不是快乐数。")]),s._v(" "),n("p",[s._v("「快乐数」 定义为：")]),s._v(" "),n("p",[s._v("对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。\n然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。\n如果这个过程 结果为 1，那么这个数就是快乐数。\n如果 n 是 快乐数 就返回 true ；不是，则返回 false 。")]),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[s._v("输入：n = 19\n输出：true\n解释：\n12 + 92 = 82\n82 + 22 = 68\n62 + 82 = 100\n12 + 02 + 02 = 1")]),s._v(" "),n("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode.cn/problems/happy-number\n著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。")]),s._v(" "),n("p",[s._v("使用哈希法，用unordered_set存储每个sum，一旦出现重复的sum则该数不是快乐数。直至sum满足快乐数。")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    int getSum(int n)\n    {\n        int sum = 0;\n        while(n)\n        {\n            sum += (n % 10) * (n % 10);\n            n /=  10;\n        }\n        return sum;\n    }\n\n    bool isHappy(int n) {\n        unordered_set<int> set;\n        while(1)\n        {\n            int sum = getSum(n);\n            if(sum == 1)\n            {\n                return true;\n            }\n            if (set.find(sum) != set.end()) {\n                return false;\n            } else {\n                set.insert(sum);\n            }\n            n = sum;\n        }\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h3",{attrs:{id:"两数之和-leetcode-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两数之和-leetcode-1"}},[s._v("#")]),s._v(" 两数之和 leetcode 1")]),s._v(" "),n("p",[s._v("题目：给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。")]),s._v(" "),n("p",[s._v("你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。")]),s._v(" "),n("p",[s._v("你可以按任意顺序返回答案。")]),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[s._v("输入：nums = [2,7,11,15], target = 9\n输出：[0,1]\n解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。")]),s._v(" "),n("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode.cn/problems/two-sum\n著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。")]),s._v(" "),n("p",[s._v("思路：")]),s._v(" "),n("p",[s._v("同样适用哈希法，由于需要得知下标与数值，所有使用map来存储结果。遍历元素，并在map中寻找是否有满足条件的值，如果没找到就将这个值与下标存入map，继续向后遍历。当遍历后方元素时，在map中找到对应的值则返回其对应的下标。")]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        std::unordered_map <int,int> map;\n        for(int i = 0; i < nums.size(); i++) {\n            // 遍历当前元素，并在map中寻找是否有匹配的key\n            auto iter = map.find(target - nums[i]); \n            if(iter != map.end()) {\n                return {iter->second, i};\n            }\n            // 如果没找到匹配对，就把访问过的元素和下标加入到map中\n            map.insert(pair<int, int>(nums[i], i)); \n        }\n        return {};\n    }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);