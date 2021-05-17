import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
    const ref = useRef(null);
    useEffect(() => {
        console.log(ref.current.clientHeight, 'Index in');
        return () => {
            console.log('Index out');
        }
    }, []);

    // useLayoutEffect(() => {
    //     console.log('useLayoutEffect');
    // }, []);
    return <h2 ref={ref}>I'm Crystal</h2>
}

function List() {
    useEffect(() => {
        console.log('List in');
        return () => {
            console.log('List out');
        }
    }, []);
    return <h2>List page</h2>
}

function Example () {
     const [ count, setCount ] = useState(0);
     const [ age, setAge ] = useState(24);

    useEffect(() => {
        console.log(`You clicked ${count} times.===========`);
        return () => {
            setAge(age - 1);
        }
    }, [count]);

     return <div>
         <p>you clicked me {count} times.</p>
         <button onClick={() => setCount( count + 1 )}>click me</button>

         <p>Jack's age is {age}.</p>

         <Router>
             <ul>
                 <li>
                     <Link to='/'>首页</Link>
                 </li>
                 <li>
                     <Link to="/list">列表</Link>
                 </li>
             </ul>

             <Route path="/" exact component={Index}/>
             <Route path="/list" exact component={List}/>
         </Router>
     </div>
}

export default Example;
