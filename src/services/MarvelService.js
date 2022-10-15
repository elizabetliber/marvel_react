class MarvelService {
    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = process.env.REACT_APP_API_KEY

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters = () => {
        const res = this.getResource(`${this._apiBase}characters?orderBy=modified&limit=9&offset=210&${this._apiKey}`)
        return res.data.results.map(this._transformCharacter)
    }

    getCharacter = async (characterId) => {
        const res = await this.getResource(`${this._apiBase}characters/${characterId}?${this._apiKey}`)
        return this._transformCharacter(res.data.results[0])
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail + "." + char.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}

export default MarvelService;