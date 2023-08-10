---
title: Day08 字符串 part01
date: 2023-7-18
tags:
 - algorithms
categories:
 - Algorithms
---
#  day08 字符串part01

### 反转字符串 leetcode 344

题目：编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

 

示例 1：

输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/reverse-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 双指针法

很简单，和反转链表一样使用双指针一前一后向中间遍历交换即可。

```c++
class Solution {
public:
    void reverseString(vector<char>& s) {
        for(int i = 0, j = s.size()-1; i < j; i++, j--)
        {
            swap(s[i], s[j]);
        }
    }
};
```

### 反转字符串II leetcode 541

题目：给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

如果剩余字符少于 k 个，则将剩余字符全部反转。
如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。


示例 1：

输入：s = "abcdefg", k = 2
输出："bacdfeg"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/reverse-string-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路正确，i每次向右移动2k步，同时反转其中前k个字符，当剩余长度不足k时，全部反转。

```c++
class Solution {
public:
    string reverseStr(string s, int k) {
        for(int i = 0; i < s.size(); i += 2 * k)
        {
            if(i + k <= s.size())
            {
                reverse(s.begin() + i, s.begin() + i + k );
            }
            else
            {
                reverse(s.begin() + i, s.end());
            }
        }
        return s;
    }
};
```

### 替换空格 剑指Offer 05

题目：请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/ti-huan-kong-ge-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 双指针法

首先统计空格数量，将数组长度扩展为对应长度。从后向前遍历进行替换。

选择从后向前替换是因为如果从前向后时间复杂的为O(n^2),因为每次添加元素都要将添加元素之后的所有元素向后移动

```C++
class Solution {
public:
    string replaceSpace(string s) {
        int count = 0;
        int oldSize = s.size();
        for(int i = 0; i < oldSize; i++)
        {
            if(s[i] == ' ') count++;
        }

        // 扩充字符串s的大小，也就是每个空格替换成"%20"之后的大小
        s.resize(s.size() + count * 2);
        int sNewSize = s.size();
        for(int i = sNewSize - 1, j = oldSize - 1; j < i; j--, i--)
        {
            if(s[j] != ' ')
            {
                s[i] = s[j];
            }
            else
            {
                s[i] ='0';
                s[i - 1] = '2';
                s[i - 2] = '%';
                i -= 2;
            }
        }
        return s;
    }
};
```



### 反转字符串中的单词 leetcode 151

题目：给你一个字符串 s ，请你反转字符串中 单词 的顺序。

单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

示例 1：

输入：s = "the sky is blue"
输出："blue is sky the"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/reverse-words-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：

先删除多余空格，再反转整个字符串，最后反转单词。

思路很简单，删除空格时注意使用快慢双指针法！！！！



```C++
class Solution {
public:
    void reverse(string& s, int start, int end){ //翻转，区间写法：左闭右闭 []
        for (int i = start, j = end; i < j; i++, j--) {
            swap(s[i], s[j]);
        }
    }

    void removeExtraSpaces(string& s) {//去除所有空格并在相邻单词之间添加空格, 快慢指针。
        int slow = 0;
        for(int fast = 0; fast < s.size(); fast++)
        {
            if(s[fast] != ' ')
            {
                if(slow != 0)
                {
                    s[slow++] = ' ';    //给非首位的单词前加一个空格。
                }
                while(fast < s.size() && s[fast] != ' ')
                {
                    s[slow++] = s[fast++];
                }
            }
        }
        s.resize(slow);
    }

    string reverseWords(string s) {
        removeExtraSpaces(s);
        reverse(s, 0, s.size() - 1);
        int start = 0;
        for (int i = 0; i <= s.size(); ++i) {
            if (i == s.size() || s[i] == ' ') { //到达空格或者串尾，说明一个单词结束。进行翻转。
                reverse(s, start, i - 1); //翻转，注意是左闭右闭 []的翻转。
                start = i + 1; //更新下一个单词的开始下标start
            }
        }
        return s;
    }
};
```

### 左旋转字符串 剑指 Offer 58

题目：字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：局部反转+整体反转。挺简单，但是没接触过就没想出来，很有意思。

先反转前k个字符，再反转后面的字符，最后整体反转字符串则可得到左旋转后的字符串。

```C++
class Solution {
public:
    string reverseLeftWords(string s, int n) {
        reverse(s.begin(), s.begin() + n);
        reverse(s.begin() + n, s.end());
        reverse(s.begin(), s.end());
        return s;
    }
};
```

