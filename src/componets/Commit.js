import React from "react";

export const Commit = ({data}) => {
    return (
        <div className="commit">
            <div><p className="label">Date</p>: {data.commit.author.date}</div>
            <div><p className="label">Message</p>: {data.commit.message}</div>
            <div><p className="label">Sha</p>: {data.sha}</div>
            <div><p className="label">Author</p>: {data.commit.author.name}</div>
            <div className="url"><p className="label">URL</p>: {data.url}</div>
        </div>
    )
}