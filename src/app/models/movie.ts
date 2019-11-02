export interface Movie {
    id?: string;
    title ?: string;
    year?: number;
    rated?: string;
    released?: string;
    runtime?: string;
    genre ?: [string];
    director ?: string;
    writer ?: string;
    actors ?: string;
    plot ?: string;
    Language ?: string;
    Country ?: string;
    Awards ?: string;
    Poster ?: string;
    Available ?: boolean;
    ComingSoon ?: boolean;
    Images?: [string];
}
