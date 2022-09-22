import { Button, Container, ProductContainer, Image } from './styledComponent'
import butter from '../image/products/butter.png'
import milk from '../image/products/milk.png'
import bread from '../image/products/bread.png'
import full from '../image/products/full.svg'
import half from '../image/products/half.svg'
type props = {
  product: {
    id: string
    name: string
    image: string
    description: string
    rating: number
    price: number
  }
  onClick: () => void
}

const images = [bread, butter, milk]

export default function ProductItem({ product, onClick }: props) {
  const getStars = () => {
    const stars: any = []
    const rating: number = product.rating

    for (let i = 1; i <= rating; i++) {
      rating <= 5
        ? stars.push(
            <img width={20} height={20} key={i} alt="star" src={full} />
          )
        : ''
    }
    stars.push(<img width={20} height={20} alt="star" src={half} />)

    return stars
  }
  return (
    <ProductContainer key={product.id}>
      {images.map((image) => {
        if (image === product.image) {
          return (
            <Image
              key={product.id}
              src={image}
              height={100}
              width={150}
              style={{ border: '2px solid gray' }}
            />
          )
        }
      })}
      <Container direction="column" style={{ margin: '5px 10px' }}>
        <Container>
          <h3 style={{ marginRight: 'auto' }}>{product.name}</h3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {getStars()}
          </div>
        </Container>
        <Container style={{ gap: 20 }}>
          <p style={{ color: '#5f5959' }}>{product.description}</p>
          <p
            style={{
              fontWeight: 'bold',
              minWidth: 'fit-content',
            }}
          >
            £ {product.price.toFixed(2)}
          </p>
        </Container>
        <Button onClick={onClick}>add to cart</Button>
      </Container>
    </ProductContainer>
  )
}
