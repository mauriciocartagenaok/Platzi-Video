import React,{ useState,useEffect }   from   'react';
import { connect }                    from   'react-redux';
import Search                         from   '../components/Search';
import Categories                     from   '../components/Categories';
import CarouselItem                   from   '../components/CarouselItem';
import Carousel                       from   '../components/Carousel';
import useInitialState                from   '../hooks/useInitialState';

import '../asset/styles/App.scss';

// const API = 'http://localhost:3000/initalState';

const Home=({myList,trends,originals})=>{
    // const initialState = useInitialState(API);
    
    // return initialState.length===0 ? <h1>Loading .....</h1> :(  
       return(
        <>
                <Search isHome></Search>
               
                <Categories title="Mi lista">
                    <Carousel>
                    {
                        myList.length >0 &&
                        myList.map(list =>
                                <CarouselItem 
                                key={list.id} 
                                {...list} 
                                isList
                                />
                        )
                    }   
                    </Carousel>
                </Categories>
                
                
                <Categories title="Tendencias">
                    <Carousel>
                            {trends.map(item=>  
                                <CarouselItem key={item.id} {...item} />
                            )}
                       
                    </Carousel>
                </Categories>
                <Categories title="Originas de Platzi Video">
                    <Carousel>
                        {
                            originals.map(origin=>
                                <CarouselItem key={origin.id} {...origin}/>
                            )
                        }
                    </Carousel>
                </Categories>
        </>
       );
};
const mapStateToProps = state =>{
    return{
        myList:state.myList,
        trends:state.trends,
        originals:state.originals,
    };
};
export default connect(mapStateToProps,null)(Home);