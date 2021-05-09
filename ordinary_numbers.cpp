#include <bits/stdc++.h>
using namespace std;
#define ll long long int
 
 
int power_of_ten(ll n){
    int count = 0;
    while(n>=10){
        n/=10;
        count++;
    }
 
    return count;
}
 
int main(){
    int t;
    cin>>t;
    while(t--){
        ll n;
        cin>>n;
        int power = power_of_ten(n);
        // cout<<power<<endl;
        int count = power*9;
        string num = to_string(n);
        string same_chars = "";
        for(int i=0;i<num.size();i++){
            same_chars += num[0];
        }
        // cout<<same_chars<<endl;
        count+= (stoi(same_chars) <= n);
        count+= (num[0] - 49);
        cout<<count<<endl;
    }
}
