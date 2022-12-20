import React from "react";
import { FcGoogle } from 'react-icons/fc';
import useFirebase from "../Hooks/useFirebase";

const Login = () => {

    /* const Products = [
        {
            _id: 1,
            brand:"Apple",
            product: "ASUS VivoBook 15 Laptop",
            img: "https://i.ibb.co/BNLmwWM/Web-Design.png",
            price: 40500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor: "14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
        },
        {
            _id: 2,
            brand:"Apple",
            product: "ASUS VivoBook 15 Laptop",
            img: "https://i.ibb.co/s9JjPtC/web-development1.png",
            price: 40500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 3,
            brand:"Apple",
            product: "ASUS VivoBook 15 Laptop",
            img: "https://i.ibb.co/193vLWr/app-develop.png",
            price: 40500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
            
        },
        {
            _id: 4,
            brand:"Microsoft",
            product: "Core I3 I5 I7",
            img: "https://i.ibb.co/qJYqHqR/Figma-to-Html.jpg",
            price: 40500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 5,
            brand:"Microsoft",
            product: "Core I3 I5 I7",
            img: "https://i.ibb.co/r0v8Zg5/Existing-Site-Re-development.png",
            price: 40500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 6,
            brand:"Asus",
            product: "I9 I7 I5 Desktop Computer",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 40500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 7,
            brand:"Asus",
            product: "I9 I7 I5 Desktop Computer",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 35500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 8,
            brand:"Asus",
            product: "Core i5 i7 i9 desktop gaming computer",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 35500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 9,
            brand:"Lenovo",
            product: "Core i5 i7 i9 desktop gaming computer",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 35500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 10,
            brand:"Lenovo",
            product: "Computer Monoblock I9 Pc Desktop",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 35500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 11,
            brand:"Lenovo",
            product: "Computer Monoblock I9 Pc Desktop",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 39500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 12,
            brand:"Lenovo",
            product: "Computer Monoblock I9 Pc Desktop",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 39500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 13,
            brand:"Acer",
            product: "OEM PC Curved Gaming Monitor",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 39500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 14,
            brand:"Acer",
            product: "OEM PC Curved Gaming Monitor",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 39500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 15,
            brand:"Acer",
            product: "OEM PC Curved Gaming Monitor",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 39500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 16,
            brand:"HP",
            product: "rtx 3090 desktop",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 42500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 17,
            brand:"HP",
            product: "rtx 3090 desktop",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 42500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 18,
            brand:"HP",
            product: "rtx 3090 desktop",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 42500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 19,
            brand:"Dell",
            product: "pc curved i9 i7 touch screen desktop monoblock",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 42500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },
        {
            _id: 20,
            brand:"Dell",
            product: "pc curved i9 i7 touch screen desktop monoblock",
            img: "https://i.ibb.co/xj0865x/Management.jpg",
            price: 42500,
            Quantity:20,
            Status:145,
            SSD:"256GB",
            HDD:"500GB",
            Monitor:"14In",
            Ram:"4GB",
            Processor:"Intel Core i3-1115G4 Processor",
            shortDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus.",
            description:"Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat nemo aliquam dolore enim omnis culpa magni cum voluptas accusamus."            
        },

    ]; 
    */


    const {signInWithGoogle} = useFirebase()
    return (
        <>
            <div className="w-full px-5 md:px-0 flex justify-center items-center">
                <div className="md:w-11/12 w-full h-screen mx-auto flex justify-center items-center">
                    <div className="card md:w-96 h-96 bg-emerald-400 shadow-xl ">
                        <div className="card-body ">
                            <div className="flex flex-col justify-center items-center text-white">
                                <img
                                    className="w-52 h-52 rounded-full"
                                    
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WI0fEmhyWbKPf37f3uMMvc3WUmN9sqJG0g&usqp=CAU"
                                    alt=""
                                />

                                <div className=" w-full mt-10">
                                    <button
                                        className="input w-full bg-white hover:bg-green-50 hover:shadow-xl text-gray-600 flex flex-row justify-center items-center"
                                        onClick={signInWithGoogle}
                                    >
                                        <FcGoogle />
                                        <span className="ml-5">Login With Google</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
