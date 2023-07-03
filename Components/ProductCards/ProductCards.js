import "./productCards.scss";
import product1 from "../../public/Assets/products/product1.webp";
import product2 from "../../public/Assets/products/product2.webp";
import product3 from "../../public/Assets/products/product3.webp";
import product4 from "../../public/Assets/products/product4.webp";
import Image from "next/image";

export default function ProductCards() {

    const cardData = [
        {
            img: product1,
            title: "CREDIT CARDS",
            description: "100% Contactless Application Process with Instant Approval From Top Banks."
        },
        {
            img: product2,
            title: "Loans",
            description: "100% online process. Instant offers. Affordable Rate of Interest on loans."
        },
        {
            img: product3,
            title: "BUY NOW PAY LATER",
            description: "Short-term financing that allows consumers to make purchases and pay for them over time."
        },
        {
            img: product4,
            title: "SAVING ACCOUNTS",
            description: "ZET offers range of savings account that suits your personal needs for the banking."
        },
    ]
    return <div className={"product-wrapper container xl mx-auto xl:px-36 2xl:px-4"}>
        <h2 className={"title"}>
            Products on ZET
        </h2>
        <p className={"subtitle"}>We are trusted by best brand in the country</p>
        <div className={"product-cards"}>
            {
                cardData.map((value, index) => {
                    return <div key={index}
                                className={"product-single-card"}
                    >
                        <Image src={value.img} alt={"cards"} />
                        <div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    </div>
                })
            }
        </div>
        <div className={"product-bg-top"}/>
    </div>
}