/**
 * Created by testt on 2015/4/28.
 */
class GetObject
{
    private init():void
    {
        egret.getTimer();
        egret.callLater();
        egret.getQualifiedClassName();
        egret.getQualifiedSuperclassName();
        egret.getDefinitionByName();
        egret.setTimeout();
        egret.clearTimeout();
        egret.hasDefinition();
        egret.toColorString();

        //变量类型转换
        var str:any = "abc";  //any类型
        var strNum:number = <number>str;  //通过
        strNum += 5;  //abc5

        //用instanceof判断类型
        if(str instanceof strNum)
        {

        }

        //Typescript数组
        var arr:any[] = new Array();  //任意类型数组
        var strArr:string[] = ["a","b","c"];  //固定类型数组

        var array:string[][] = [
            ["a", "b", "c"],
            ["x", "y", "z"]
        ];

        //or

        var strArr2:String[][] = new Array();
        strArr2.push(["a", "b", "c"]);
        strArr2.push(["x", "y", "z"]);

        //TypeScript引入Object Types,ObjectTypes还支持"?"表示可选参数
        this.calculateArea({width:123, height:456});

        var fun:(str:String) => void; //fun是输入为string，没有输出的函数

        var sayHello:(input:String) => string = function(s:String){
            return "Hello";
        }
        //保存函数的数组也写很长
        var strArray:{(s:String):string;}[] = [function aa(str:string){return str;}];

        var sayHello2:IStringFunction = function(s:string)
        {
            return "Hello";
        }

        //语法格式为()=>{} this指向
        var messenger = {
            message:"Hello World",
            start:function(){
                //setTimeout(()=>{alert(this.message);}, 3000);
            }
        };

        messenger.start;
    }


    private calculateArea(rect:{width:number; height:number; depth?:number;}):number
    {
        if(rect.depth)
        {
            return rect.width*rect.height*rect.depth;
        }
        return rect.width*rect.height;
    }

    //rest参数...paramName[:paramType]
    //private countDwarvesTallerThan(minHeight:number, ...dwarves:Dwarf[]):number
    //{
    //    var count:number=0;
    //    for(var i=0;i<dwarves.length;i++)
    //    {
    //        //if(dwarves[i].height > minHeight)
            //{
            //    count++;
            //}
    //    }
    //
    //    return count++;
    //}
}

interface IStringFunction{
    (input:String):string;
}

//TypeScript中的module相当于ActionScript3中的Package
//Typescript中构造函数的函数名用constructor,而不用类名
module net.nshen
{
    export class Test1
    {
        private str:string = "abc";
        public  num:number = 123;
        public createTime:string;

        constructor()
        {
            this.createTime = new Date().toUTCString();
        }

        static traceDate():void
        {
            var currrentDate:Date = new Date();
            console.log(currrentDate.toUTCString());
        }
    }
}

//调用Static方法
net.nshen.Test1.traceDate();

//module原理
module M
{
    var s = "hello";
    export function f()
    {
        return s;
    }
}

M.f()
M.s; // Error, s is nor exported

//编译后的JS代码
var M;
(function (M) {
    var s = "hello";
    function f()
    {
        return s;
    }

    M.f = f;
})

(M||(M={}));

//函数重载
//AS3和JS都是不支持函数重载的，TypeScript以一种鸡肋的方式支持着。
//先写一些同名的函数声明，最后在一个同名函数里写出实现（要自己判断参数类型）：
function attr(name: string): string;
//function attr(name: string, value: string): Accessor;
//function attr(map: any): Accessor;

function attr(nameOrMap: any, value?: string): any{
    if(nameOrMap && typeof nameOrMap === "object"){
        //handle map case
    }
    else
    {
        //handle string case
    }
}

//TypeScript 允许多个类在同一个文件里，但如果类与类在不同的文件，需要这种写法，相当于AS3 的 import

// <reference path="SimpleWebSocket.ts"/>

//class ComplexWebSocket extends SimpleWebSocket {
//
//}

//override方法子类不需要写关键字，直接同名方法即可 ，可调用super.xxx()
class Base {

    public test():number
    {
        return 1;
    }

    public test2():number
    {
        return 2;
    }
}

class Derived extends Base {

    public test():number
    {
        return 3;
    }

    public test2():number
    {
        return super.test();
    }

}


var d:Derived = new Derived();
console.log(d.test()); // 3
console.log(d.test2());// 1

//Enum
//TypeScript支持enum关键字
enum Color { Red, Green, Blue }
console.log(Color.Red); // 0
var c:number = Color.Green;
console.log(Color[c])  //Green

declare var document;
document.title = "Hello";