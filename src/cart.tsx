export default function Cart(){

    let counter = 0 ;

    const addtoCart = () =>{
        counter = counter++ ;
    }
    return (
        <div>
            <h2>Shoping Cart</h2>
            <p>items in the cart :  {counter}</p>
            <button onClick={addtoCart}>Add to cart</button>
        </div>
    )
}