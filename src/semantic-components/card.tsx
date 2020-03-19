import * as React from 'react';

interface ICardProps {
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
    return (
        <div className="Card">
            <div className="ui card" style={{width: "auto"}}>
                <div className="image">
                    <img src="/images/avatar2/large/kristy.png" />
                </div>
                <div className="content">
                    {/* <a className="header">Kristy</a> */}
                    <div className="meta">
                        <i className="clock outline icon"></i>
                        <span className="date">2020-01-14</span>
                        <div className="ui purple horizontal label">Fruit</div>
                    </div>
                
                </div>
                <div className="extra content">
                    <div className="description tiny">
                        软件应用程序在计算机的主存储器中运行，我们称之为随机存取存储器(RAM)。JavaScript，尤其是 NodeJS （服务端 JS）允许我们为终端用户编写从小型到大
                        型的软件项目。处理程序的内存总是一个棘手的问题，因为糟糕的实现可能会阻塞在给定服务器或系统上运行的所有其他应用程序。C 和 C++ 程序员确实关心内
                        存管理，因为隐藏在代码的每个角落都有可能出现可怕的内存泄漏。但是对于 JS 开发者来说，你真的有关心过这个问题吗？
                    </div>
                </div>
                <div className="extra content" style={{textAlign: "right"}}>
                    <span>
                        <i className="thumbs up outline icon"></i>
                        0
                    </span>
                    <span style={{marginLeft: "5px"}}>
                        <i className="comment alternate outline icon"></i>
                        0
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Card;