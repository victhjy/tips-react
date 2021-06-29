import React from 'react'
export default
class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.theLi = React.createRef()
    }
    state = {
        "l":[1,'ss',34],
        "r":[11,22,33]
    }
    
    aaa(val){
        // alert(this.refs.theLi)
        console.log(this.theLi.current)
        console.log(val)
        alert(val)
    }
    render() {
       return(
           <div id="nav" >
               <ul ref={this.theLi}>
               {
                this.state.l.map((val)=>{
                    return <li onClick={()=>{this.aaa(val)}} >{val}</li>
                })
               }
               </ul>
           </div>
       ) 
    }
}