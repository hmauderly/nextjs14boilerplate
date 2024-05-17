import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./globals.css";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/Footer";



const getData = async () => {
    // Revalidation
    const res = await fetch("http://localhost:4000/articles", {
        next: {
            revalidate: 60,
        },
    });
    const data = await res.json();
    return data;
};



export default async function Home() {
    // console.log("Test de composant");
    const articles = await getData();


    return (
        <main className=" ">
            <Menu title="A new title"/>
            <div className="container  w-5/6 flex  flex-col items-center  justify-center mt-40 mx-auto">
                <p className="font-bold">Plongez dans la diversité des croyances mondiales à travers des articles approfondis, des événements
                    religieux, et une vaste collection de ressources éducatives pour une exploration complète des
                    religions du monde.</p>
                <h2 className="font-bold">Les textes du jours</h2>
                <Image
                    src="/assets/img/logo_chris.webp"
                    width={60}
                    height={60}
                    className="m-2"
                    alt="Religio.fr"
                />

                <h3 className="">Christianisme - Bible (Évangile selon Jean 3:16)</h3>
                <p className="py-4 ">

                    Texte original (Grec ancien) :"οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ’ ἔχῃ ζωὴν αἰώνιον."
                    Traduction française :"Car Dieu a tant aimé le monde qu’il a donné son fils unique, afin que
                    quiconque croit en lui ne périsse pas, mais ait la vie éternelle."
                </p>
                <Image
                    src="/assets/img/logo_islam.webp"
                    width={60}
                    height={60}
                    className="m-2"
                    alt="Religio.fr"
                />
                <h3>Islam - Coran (Sourate Al-Ikhlas 112:1-4)</h3>
                <p className="py-4">

                    Texte original (Arabe) :"قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ،
                    وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ."
                    Traduction française :"Dis : Il est Allah, l'Unique. Allah, le Refuge absolu. Il n'a engendré, n'est
                    pas engendré, et nul n'est égal à Lui."
                </p>
                <Image
                    src="/assets/img/logo_juda.webp"
                    width={60}
                    height={60}
                    className="m-2"
                    alt="Religio.fr"
                />
                <h3>Judaïsme - Torah (Deutéronome 6:4-5)</h3>
                <p className="py-4">

                    Texte original (Hébreu) :"שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד׃ וְאָהַבְתָּ אֶת יְהוָה
                    אֱלֹהֶיךָ בְּכָל לְבָבְךָ וּבְכָל נַפְשְׁשְׁךָ, וּבְכָל מְאֹדֶךָ."
                    Traduction française :"Écoute, Israël : l'Éternel notre Dieu, l'Éternel est un. Tu aimeras l'Éternel
                    ton Dieu de tout ton cœur, de toute ton âme et de toute ta force."
                </p>
                <Image
                    src="/assets/img/logo_boud.webp"
                    width={60}
                    height={60}
                    className="m-2"
                    alt="Religio.fr"
                />
            <h3>Bouddhisme - Dhammapada (Versets 183-185)</h3>
            <p className="py-4">
                Texte original (Pali) :"सब्बपापस्स अकरणं कुसलस्स उपसम्पदा सचित्तपरियोधपनं एतं बुद्धानसासनं।"
                Traduction française :"Ne pas commettre le mal, cultiver le bien, purifier son cœur, telle est
                l'enseignement des Bouddhas."
            </p>
                <Image
                    src="/assets/img/logo_indou.webp"
                    width={60}
                    height={60}
                    className="m-2"
                    alt="Religio.fr"
                />
            <h3>Bhagavad Gita (Chapitre 2, Verset 20)</h3>
            <p className="py-4">

                Texte original (Sanskrit) :"न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं
                पुराणो न हन्यते हन्यमाने शरीरे।"
                Traduction française :"Il n’est jamais né, il ne meurt jamais; après avoir été, il ne cesse plus d’être.
                Non-né, éternel, perpétuel, ancien, il n’est pas tué lorsque le corps est tué."
            </p>
            <p className="py-4">
                Ces extraits offrent un aperçu des principes moraux et des instructions de vie selon différentes croyances
                religieuses. Pour une compréhension plus profonde, je recommande de visiter les liens fournis et d'explorer
                les textes dans leur contexte complet.
            </p>
            </div>

            <div className="flex flex-wrap p-6 justify-center">

                {
                    // Affichage des données
                    articles.map((article: Article) => (
                        <div key={article.id} className=" w-96 m-4 shadow-xl">
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
            <Footer/>
        </main>
    );
}