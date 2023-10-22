export function parseFeed(feed: Document) {
    const results = Array.from(feed.querySelectorAll("rss > channel > item")).map(i => {
        return {
            title: i.querySelector("title")?.childNodes[0].textContent as string,
            description: i?.getElementsByTagName("content:encoded")[0].textContent?.replace(/<figure>.*?<\/figure>/, "") as string || "",
            image: i
                .getElementsByTagName("content:encoded")[0]
                ?.textContent?.split('src="')[1]
                .split(/[ ">]/)[0] as string,
            author: i.getElementsByTagName("dc:creator")[0].textContent as string,
            link: i.querySelector("link")?.innerHTML as string,
            guid: i.querySelector("guid")?.innerHTML as string,
            date: new Date(i.querySelector("pubDate")?.innerHTML ?? ""),
        };
    });
    console.log(results)
    return results;
}

export function fetcher(url: string) {
    return fetch(url)
        .then(r => r.text())
        .then(xml => {
            return new window.DOMParser().parseFromString(xml, "text/xml");
        });
}