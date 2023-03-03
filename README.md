# 3dnetwork
Created with CodeSandbox
code 해설
dataset만들기에서

function genRandomTree1(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1))
      }))
  };
}
->생성댐
genRandomTree1()하면 dataset 생김.

n=300 n 300이라는뜻
nodes: 
[...Array(300)] 300개짜리 array 생성
[...Array(300).keys()] 300개짜리 array 생성(번호부여)
[...Array(N).keys()].map((i) => ({ id: i })),
번호부여-> id: 번호부여 이렇게 해주는 것
links: []
json 형식만들기{nodes:[id:1,id:2,id:3,id:4,id:5], links:[source:1 target:0...] }


#2그룹 도 무리없이 됨.
#2그룹 색칠어떻게??

#python 코드와,
#javascript에서의 source -target코드 연결이 필요.

nodeAutoColorBy="group"
코드를 통해 group  에 mask된 숫자코드에 해당하는 color 를 부여할 수 있음.
color 갯수는? 모르겠음.



#### 번호부여 코드 만들어야함.
#### Fix nodes after dragging (source)
로 바꿀예정.


 onNodeDragEnd={node => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        }}
        추가하면 공간상 끌어놓는것 
