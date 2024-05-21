import React from "react";import Link from "next/link";
import Image from "next/image";
import {ArticleSmallProps, ArticleSmall} from "@/app/interfaces/interfaces";


const ArticleItem: React.FC<ArticleSmallProps> = ({ articleSmall}) => {
    const { id,
        title,
        slug,
        PublishDate,
        description,
        imageUrl} = articleSmall;

    return (
        <div className="flex flex-wrap p-6 justify-center">

            {
                // Affichage des données

                <div key={id} className=" w-full p-2 flex flex-row shadow-xl">
                    <div className=" w-1/6 flex flex-col items-center">
                    <Link href={"/articles/"+slug}>
                            <Image
                                src={"http://51.15.200.107:1337"+imageUrl}
                                width={128}
                                height={128}
                                alt={title}
                                className="object-cover"
                            />
                    </Link>
                    </div>
                    <div className="flex flex-col text-center  w-5/6">
                        <Link href={"/articles/"+slug}>
                        <h2 className="font-bold">{title}</h2>
                        </Link>
                        <div className="flex flex-col">
                        {description}<br />{PublishDate.toLocaleDateString()}   {PublishDate.toLocaleTimeString()}
                        </div>
                </div>
                </div>

            }
        </div>
    )

}

export default ArticleItem;