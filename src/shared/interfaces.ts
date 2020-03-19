export interface GithubViewerData {
    viewer: GithubViewer;
}

interface GithubViewer {
    avatarUrl : string;
    login: string;
    name : string;
}