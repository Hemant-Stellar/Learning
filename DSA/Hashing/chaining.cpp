#include <iostream>
#include <list>
using namespace std;
struct MyHash{
int BUCKET;
list<int>* table;
MyHash(int b){
    BUCKET = b;
    table = new list<int>[b];
}
void insert(int key){
    int i = key%BUCKET;
    table[i].push_back(key);
}
void remove(int key){
    int i = key%BUCKET;
    table[i].remove(key);
}
bool search(int key){
    int i = key%BUCKET;
    for(auto x:table[i]){
        if(x==key) return true;
    }
    return false;
}
};
int main(){
    MyHash h(7);
    h.insert(56);
    h.insert(7);
    h.insert(13);
    h.remove(56);
    cout<<h.search(7)<<endl;
    cout<<h.search(13);
return 0;
};