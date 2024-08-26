import './App.css';
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
function App() {
  const intialLst=[{id:1,name:"Reading",isChecked:false},{id:2,name:"Exercise",isChecked:false},{id:3,name:"Playing Games",isChecked:false}]
  const[inputValue,setInptVal]=useState('')
  const[watchList,setWatchList]=useState(intialLst)
  const onChangeInput=(e)=>{
    setInptVal(e.target.value)
    console.log(e.target.value)
  }
  const onClickAdd=()=>{
    console.log(watchList)
    setInptVal('')
    setWatchList([...watchList,{id:uuid(),name:inputValue,isChecked:false}])
  }
  const onChangeStatus=(id)=>{
    const updatedList=watchList.map((item)=>item.id===id?{...item,isChecked:!item.isChecked}:item)
    setWatchList(updatedList)
  }
  const onClickDelete=(id)=>{
   const filteredList=watchList.filter((item)=>item.id!==id)
   setWatchList(filteredList)
  }
  return (
    <div className="App">
      <h1 style={{fontWidth:'bold'}}>Your WishList</h1>
       <div className="top-container">
        <label>
          <input className="inputWishList" value={inputValue} onChange={onChangeInput} placeholder="enter your wishList"/>
        </label>
        <button onClick={onClickAdd} className="addBtn">
          Add
          <svg style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
        </button>
       </div>
       <div style={{minWidth:'530px'}}>
       <div style={{width:'100%'}}>
        {
          watchList?.length>0 && watchList.map((item)=>{
            return(
              
              <div key={item.id} className="todoItem">
                <label>
       <input className="checkStatus" type="checkbox" onChange={()=>onChangeStatus(item.id)}/>
          <span className={item.isChecked?"strike-through wishItem":'wishItem'}>{item.name}</span>
        </label>
        <button  className="deleteBtn" onClick={()=>onClickDelete(item.id)}>
  
        <svg style={{cursor:'pointer'}}xmlns="http://www.w3.org/2000/svg" width="22" height="22"  fill="currentColor" class="bi bi-archive fs-6" viewBox="0 0 16 16">
  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>
        </button>
                </div>
                
            )
          })
        }
       </div>
       </div>
    </div>
   
  );
}

export default App;

