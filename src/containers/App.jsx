import React,{ useState,useEffect }   from   'react';
import Header                         from   '../components/Header';
import Search                         from   '../components/Search';
import Categories                     from   '../components/Categories';
import CarouselItem                   from   '../components/CarouselItem';
import Footer                         from   '../components/Footer';
import Carousel                       from   '../components/Carousel';
import useInitialState                from   '../hooks/useInitialState';

import '../asset/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App=()=>{
    const initialState = useInitialState(API);
    
    return initialState.length===0 ? <h1>Loading .....</h1> :(  
       
        <div className="App">
                <Header></Header>
                <Search></Search>
               
                <Categories title="Mi lista">
                    <Carousel>
                    {
                        initialState.mylist.length >0 &&
                        initialState.mylist.map(list =>
                                <CarouselItem key={list.id} {...list} />
                        )
                    }   
                    </Carousel>
                </Categories>
                
                
                <Categories title="Tendencias">
                    <Carousel>
                            {initialState.trends.map(item=>  
                                <CarouselItem key={item.id} {...item} />
                            )}
                       
                    </Carousel>
                </Categories>
                <Categories title="Originas de Platzi Video">
                    <Carousel>
                        {
                            initialState.originals.map(origin=>
                                <CarouselItem key={origin.id} {...origin}/>
                            )
                        }
                    </Carousel>
                </Categories>
                <Footer></Footer>
        </div>
    );
};
export default App;