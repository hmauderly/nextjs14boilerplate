import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./globals.css";
import Menu2 from "./ui/Menu2";

const getData = async () => {
    // Revalidation
    const res = await fetch("http://localhost:4000/articles", {
        next: {
            revalidate: 0,
        },
    });
    const data = await res.json();
    return data;
};

type Article = {
    id: number;
    titre: string;
    contenu: string;
    date: string;
    user_id: number;
    lienImage: string;
};

export default async function Home() {
    // console.log("Test de composant");
    const articles = await getData();


    return (
        <main className="container flex-row w-full  mx-auto">
            <Menu2 title="A new title" />
            <div className="container w-5/6 text-center flex flex-col justify-center mt-10 mx-auto">
                <h1 className="page-title">TITRE H1</h1>
                <h2 className="page-subtitle">TITRE H2</h2>

                <p className="page-content py-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, facere.
                    Ducimus quasi dolorem fuga! Laborum doloribus animi et esse maxime,
                    quos, quis corporis aliquam labore, dolorem blanditiis incidunt
                    praesentium est? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, facere.
                    Ducimus quasi dolorem fuga! Laborum doloribus animi et esse maxime,
                    quos, quis corporis aliquam labore, dolorem blanditiis incidunt
                    praesentium est?

                </p>
                <h2 className="page-subtitle">Les textes du jours</h2>
                <p className="py-8">
                    Christianisme - Bible (Évangile selon Jean 3:16)
                    Texte original (Grec ancien) :"οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν τὸν μονογενῆ
                    ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον."
                    Traduction française :"Car Dieu a tant aimé le monde qu’il a donné son fils unique, afin que
                    quiconque croit en lui ne périsse pas, mais ait la vie éternelle."
                </p>
                <p className="py-8">
                    Christianisme - Bible (Évangile selon Jean 3:16)
                    Texte original (Grec ancien) :"οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν τὸν μονογενῆ
                    ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον."
                    Traduction française :"Car Dieu a tant aimé le monde qu’il a donné son fils unique, afin que
                    quiconque croit en lui ne périsse pas, mais ait la vie éternelle."
                </p>
                <p className="py-8">
                    Christianisme - Bible (Évangile selon Jean 3:16)
                    Texte original (Grec ancien) :"οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν τὸν μονογενῆ
                    ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον."
                    Traduction française :"Car Dieu a tant aimé le monde qu’il a donné son fils unique, afin que
                    quiconque croit en lui ne périsse pas, mais ait la vie éternelle."
                </p>
            </div>

            <div className="flex flex-wrap p-6 justify-center">

                {
                    // Affichage des données
                    articles.map((article: Article) => (
                        <div key={article.id} className="card w-96 m-4 shadow-xl">
                            <figure>
                                <Image
                                    src={article.lienImage}
                                    width={300}
                                    height={300}
                                    alt={article.id}
                                    className="w-full  object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{article.titre}</h2>

                                <div className="card-actions justify-end">
                                    <Link
                                        href={`/articles/${article.id}`}
                                        className="btn btn-primary bg-menu border-0"
                                    >
                                        Visitez l'article
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </main>
    );
}