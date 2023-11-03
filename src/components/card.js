import{AiFillStar} from "react-icons/ai"
import{BsFillBagPlusFill} from "react-icons/bs"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards ({img,title,star,reviews,newPrice,prevPrice}){
    return(
        <>
          <Card className="cards-shoe" style={{ width:'17%' }}>
    <Card.Img variant="top" src= {img}  />
    <section className="cards">
    <Card.Body >
      <Card.Title>{title}</Card.Title>
      <section className="Card_review" >
        <section className="rating">
          {star}{star}{star}{star}
        </section>
        <span className="total-review">{reviews}</span>
      </section>
      <section className="card-price">
        <div className="price">
            <del>{prevPrice}</del> {newPrice}
        </div>
        <div className="bag" >
        <BsFillBagPlusFill />
        </div>
      </section>
      <Card.Text>
        Some quick example text bulk of the card's content.
      </Card.Text>
      <Button variant="dark">Add to Cart</Button>
    </Card.Body>
    </section>
    </Card>
        </>
    )
}

export default Cards