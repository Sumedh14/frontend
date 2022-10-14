import React from 'react'
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import { Link } from 'react-router-dom';
//import Loading from './Loader';
import { baseUrl } from '../shared/baseUrl';
//import CartNotifier from '../components/SharedComponents/CartNotifier';

function RenderMenuItem({ dish, onClick }) {
    const {
        id = 0,
        image = '',
        name = '',
    } = dish;
    return (
        <>
            {/* <Card onClick={() => onClick(id)}> */}
            <Card>
                <Link to={`/menu/${id}`}>
                    <CardImg width="100%" src={baseUrl + image} alt={name} />
                    <CardImgOverlay body="true" className="ml-5">
                        <CardTitle heading="true" >{name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </>
    )
}

const Dashboard = (props) => {
    const {
        featuredBreakfast = {},
        featuredVegItem = {},
        featuredNonVegItem = {},
        featuredDrinkItem = {},
    } = props;

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const items = [
        {
            src: baseUrl + featuredBreakfast.image,
        },
        {
            src: baseUrl + featuredVegItem.image,
        },
        {
            src: baseUrl + featuredNonVegItem.image,
        }, {
            src: baseUrl + featuredDrinkItem.image,
        }
    ];

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <>
            <div className="container">
                <div className="row mb-3">
                    <div className="row col-md-8">
                        <Breadcrumb >
                            <BreadcrumbItem><Link to="/menu">Dashboard</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/veg">Veg</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/non-veg">Non-Veg</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/beverages">Beverages</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/breakfast">Breakfast</Link></BreadcrumbItem>
                            {/* <BreadcrumbItem active>Dashboard</BreadcrumbItem> */}
                        </Breadcrumb>
                    </div>

                    <div className="col-2 offset-md-2 center">
                        <Breadcrumb >
                            <BreadcrumbItem><Link to="/food-cart">Food Cart</Link></BreadcrumbItem>
                            {/* <CartNotifier /> */}
                        </Breadcrumb>
                    </div>
                </div>




                <h3 style={{ color: '#4b002c' }}>Have a Taste!</h3>
                <div className="row d-flex justify-content-center mb-3 carousel-background-color">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        className="custom-height"
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="text-danger" />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Dashboard;