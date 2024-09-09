import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";

export interface NavbarItem {
    id: number;
    title: string;
    link: string;
}

export interface HeadphoneItem {
    id: number;
    image: string; 
    title: string;
    subtitle: string;
    price: string;
    modal: string;
    bgColor: string;
  }

export const NavbarData: NavbarItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "Categories",
        link: "#"
    },
    {
        id: 3,
        title: "Blog",
        link: "#"
    },
    {
        id: 4,
        title: "Contact",
        link: "#"
    },
];

export const HeadphoneData: HeadphoneItem[] = [
    {
        id: 1,
        image: Img1,
        title: "Apple Airpods Wireless Over-Ear Headphones",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        price: "$40.99",
        modal: "Airpods",
        bgColor: "#e85950",
    },
    {
        id: 2,
        image: Img2,
        title: "Apple Airpods Wireless Over-Ear Headphones",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        price: "$100.99",
        modal: "Max",
        bgColor: "#24b4bc",
    },
    {
        id: 3,
        image: Img3,
        title: "Apple Airpods Wireless Over-Ear Headphones",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        price: "$100.99",
        modal: "Pro",
        bgColor: "#7aa10e",
    },
]