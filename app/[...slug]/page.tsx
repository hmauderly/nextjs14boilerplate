import Link from "next/link";
import React from "react";
import { getArticleById } from '../../components/apiStrapi';

type Props = {
    params: {
        slug: string;
        path: string;
    };

};


export default function page(props: Props) {
    const qs = props.searchParams;
    const path = props.params;
    props.params.path = props.params.slug.toString().replace(",","/");

    console.log(props);

    return (

        <div className=" ">
            SUB1
        </div>)

}