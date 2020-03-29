---
layout: page
title: Test
permalink: /test/
---



# Union-Find Tree

## 説明

集合の合併（unite）や属性がどの集合（find）に属しているかを
確認できる

## 計算量

$$ O \left( \alpha\left(n\right) \right) $$



## 実装例

- unite($x$,$y$)：集合$x$と集合$y$を併合する．
- find($k$)：要素$k$が属する集合を求める
- size($k$)：要素$k$が属する集合の数を求める
- unite($x$,$y$)：集合$x$と集合$y$が同じ集合か判定．同じ集合の場合$\rm true$，異なる集合の場合$\rm false$がかえされる


```cpp
//繋げる方向を一方向（x←y）にする
//xはyの親
typedef struct union_find{
    
    vector<ll> pa;//親
    vector<ll> ra;//木の深さ
    vector<ll> siz;//子の数
    //n要素で初期化
    void init(ll n){
        pa.resize(n);
        ra.resize(n);
        siz.resize(n);
        for(ll i = 0;i < n;i++){
            pa[i] = i;/*各ノードに番号を振る,この時par[x]=xとなる時は木の根となる*/
            ra[i] = 0LL;/*各ノード自体の高さは0*/
            siz[i] = 1LL;
        }
    }
    //木の根を求める
    ll find(ll x){
        if(pa[x] == x){
            return x;/*根ならそのノードの番号を返す*/
        }else{
            return pa[x] = find(pa[x]);/*根でないならさらにノードの根を探す*/
        }
    }

    //xとyの属する集合を併合する
    void unite(ll x,ll y){
        x = find(x);//xの根の番号を探す
        y = find(y);//yの根の番号を探す
        if(x == y){//一致すればつながっている
            return;
        }
        pa[y] = x;
        siz[x] += siz[y];
    }

    //xとyが同じ集合に属するか判定
    bool same(ll x,ll y){
        return find(x) == find(y);//同じ集合なら1、違うなら0が返る
    }
}UF;
```


## 検証

ここらへんにURLとコード



## その他

重み付きUnion-findとかも入れる？
