export class StackQuetions {
    page: number = 1;
    pagesize: number = 15;
    q: string = '';
    tagged: string = '';
}

export class StackQuestionsList {
    accepted_answer_id: number = 0;
    answer_count: number = 0;
    content_license: string = '';
    creation_date: number = 0;
    is_answered: boolean = false;
    last_activity_date: number = 0;
    last_edit_date: number = 0;
    link: string = '';
    protected_date: number = 0;
    question_id: number = 0;
    score: number = 0;
    tags: string[] = [];
    title: string = '';
    view_count: number = 0;
    down_vote_count: number = 0;
    up_vote_count: number = 0;
    body: string = '';
    owner: Owner = new Owner();
}

export class StackQuestionDetail {
    comment_count: number = 0;
    view_count: number = 0;
    down_vote_count: number = 0;
    up_vote_count: number = 0;
    accepted_answer_id: number = 0;
    answer_count: number = 0;
    score: number = 0;
    last_activity_date: number = 0;
    creation_date: number = 0;
    last_edit_date: number = 0;
    question_id: number = 0;
    favorite_count: number = 0;
    protected_date: number = 0;
    awarded_bounty_amount: number = 0;
    link: string = '';
    title: string = '';
    body: string = '';
    is_answered: boolean = false;
    tags: string[] = [];
    comments: Comment[] = [];
    owner: Owner = new Owner();
    last_editor: Owner = new Owner();
    is_accepted: boolean = false;
    share_link: string = '';
    // answers: Answer[] = [];
}

class Answer {
    comment_count: number = 0;
    down_vote_count: number = 0;
    up_vote_count: number = 0;
    is_accepted: boolean = false;
    score: number = 0;
    last_activity_date: number = 0;
    creation_date: number = 0;
    answer_id: number = 0;
    question_id: number = 0;
    last_edit_date: number = 0;
    content_license: string = '';
    share_link: string = '';
    body: string = '';
    owner: Owner = new Owner();
    last_editor: Owner = new Owner();
}

export class Comment {
    edited: boolean = false;
    score: number = 0;
    creation_date: number = 0;
    post_id: number = 0;
    comment_id: number = 0;
    content_license: string = '';
    body: string = '';
    owner: Owner = new Owner();
    reply_to_user: Owner = new Owner();
}

class Owner {
    accept_rate: number = 0;
    display_name: string = '';
    link: string = '';
    profile_image: string = '';
    reputation: number = 0;
    user_id: number = 0;
    user_type: string = '';
    badge_counts: BadgeCounts = new BadgeCounts();
}

class BadgeCounts {
    bronze: number = 0;
    silver: number = 0;
    gold: number = 0;
}