1. Clone
2. Create `.env.local` in root directory with the following data found in the MajorAudit Supabase Project Settings:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=<Project_URL>
    SUPABASE_SERVICE_ROLE_KEY=<Your_Service_Role_Key>
    ```
3. Run `npm install`
4. Run `npm run dev`

Currently pulls all data from all tables and serves them to the frontend in json format. Will edit functions to allow selectivity (i.e., select data associated with a single student_id, major_version_id, etc.)
