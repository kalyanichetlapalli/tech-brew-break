import { http, HttpResponse } from 'msw';

const BASE_URL = 'http://localhost:54321';

export const handlers = [
  // Auth handlers
  http.post(`${BASE_URL}/auth/v1/signup`, () => {
    return HttpResponse.json({
      user: {
        id: 'test-user-id',
        email: 'test@example.com',
        created_at: new Date().toISOString(),
      },
      session: {
        access_token: 'test-access-token',
        refresh_token: 'test-refresh-token',
      },
    });
  }),

  http.post(`${BASE_URL}/auth/v1/token`, () => {
    return HttpResponse.json({
      user: {
        id: 'test-user-id',
        email: 'test@example.com',
      },
      session: {
        access_token: 'test-access-token',
        refresh_token: 'test-refresh-token',
      },
    });
  }),

  // Puzzles handlers
  http.get(`${BASE_URL}/rest/v1/puzzles`, () => {
    return HttpResponse.json([
      {
        id: 'puzzle-1',
        title: 'Test Puzzle',
        description: 'A test puzzle',
        difficulty: 'easy',
        category: 'algorithms',
        is_active: true,
        created_at: new Date().toISOString(),
      },
    ]);
  }),

  http.post(`${BASE_URL}/rest/v1/puzzle_submissions`, () => {
    return HttpResponse.json({
      id: 'submission-1',
      puzzle_id: 'puzzle-1',
      user_id: 'test-user-id',
      submission: 'test solution',
      is_correct: true,
      created_at: new Date().toISOString(),
    });
  }),

  // Games handlers
  http.get(`${BASE_URL}/rest/v1/games`, () => {
    return HttpResponse.json([
      {
        id: 'game-1',
        title: 'Test Game',
        description: 'A test game',
        game_type: 'quiz',
        difficulty: 'medium',
        is_active: true,
        created_at: new Date().toISOString(),
      },
    ]);
  }),

  http.post(`${BASE_URL}/rest/v1/game_scores`, () => {
    return HttpResponse.json({
      id: 'score-1',
      game_id: 'game-1',
      user_id: 'test-user-id',
      score: 100,
      created_at: new Date().toISOString(),
    });
  }),

  // Brainstorm handlers
  http.get(`${BASE_URL}/rest/v1/brainstorm_challenges`, () => {
    return HttpResponse.json([
      {
        id: 'challenge-1',
        title: 'Test Challenge',
        description: 'A test challenge',
        category: 'innovation',
        is_active: true,
        created_at: new Date().toISOString(),
      },
    ]);
  }),

  http.post(`${BASE_URL}/rest/v1/brainstorm_submissions`, () => {
    return HttpResponse.json({
      id: 'brainstorm-sub-1',
      challenge_id: 'challenge-1',
      user_id: 'test-user-id',
      submission: 'test brainstorm',
      created_at: new Date().toISOString(),
    });
  }),

  // Learning content handlers
  http.get(`${BASE_URL}/rest/v1/learning_content`, () => {
    return HttpResponse.json([
      {
        id: 'content-1',
        title: 'Test Video',
        description: 'A test video',
        category: 'web',
        video_url: 'https://example.com/video.mp4',
        duration: 600,
        is_active: true,
        created_at: new Date().toISOString(),
      },
    ]);
  }),

  http.post(`${BASE_URL}/rest/v1/learning_progress`, () => {
    return HttpResponse.json({
      id: 'progress-1',
      content_id: 'content-1',
      user_id: 'test-user-id',
      completed: false,
      watch_time: 0,
      created_at: new Date().toISOString(),
    });
  }),

  // Contact submissions
  http.post(`${BASE_URL}/rest/v1/contact_submissions`, () => {
    return HttpResponse.json({
      id: 'contact-1',
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message',
      created_at: new Date().toISOString(),
    });
  }),

  // Profiles handlers
  http.get(`${BASE_URL}/rest/v1/profiles`, () => {
    return HttpResponse.json([
      {
        id: 'test-user-id',
        username: 'testuser',
        full_name: 'Test User',
        avatar_url: null,
        created_at: new Date().toISOString(),
      },
    ]);
  }),
];
