export interface GithubViewerData {
    viewer: GithubViewer;
}

interface GithubViewer {
    avatarUrl: string;
    login: string;
    name: string;
}

export interface GithubArticlesData {
    repository: GithubRepository;
}

export interface GithubRepository {
    issues: GithubIssues;
}

export interface GithubIssues {
    pageInfo: GithubPageInfo;
    nodes: GithubNode[]
}

export interface GithubPageInfo {
    hasNextPage: boolean;
    endCursor: string;
}

export interface GithubNode {
    title: string;
    number: number;
    body: string;
    createdAt: string;
    labels: GithubLabels;
    comments: GithubComments;
    reactions: GithubReactions;
}

export interface GithubLabels {
    nodes: GithubLabelsNode[];
    __typename: string;
}

export interface GithubLabelsNode {
    color: string;
    name: string;
    __typename: string;
}

export interface GithubComments {
    totalCount: number;
    __typename: string;
}

export interface GithubReactions {
    totalCount: number;
    __typename: string;
}
