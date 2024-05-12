
import React from "react";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/Footer";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
        path: string;
    };

};

export default async function page(props: Props) {


    return (
        <main className="container flex-row w-full  mx-auto">
            <Menu title="A new title"/>
            <div className="container w-5/6 flex  flex-col items-center  justify-center mt-10 mx-auto">
                <Image
                    src="/assets/img/religio_ico_trans_hd.png"
                    width={640}
                    height={640}
                    className="m-2"
                    alt="Religio.fr"
                />
            </div>
            <Footer/>
        </main>
    );

}