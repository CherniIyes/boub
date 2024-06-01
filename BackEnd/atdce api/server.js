const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRouter = require('./apis/routers/blog-router.js');
const eventRouter = require('./apis/routers/event-router.js');
const partnerRouter = require('./apis/routers/partner-router.js');
const projectRouter = require('./apis/routers/project-router.js');
const newsRouter = require('./apis/routers/news-router.js');
const jobofferRouter = require('./apis/routers/job-offer-router.js');
const candidatesRouter = require('./apis/routers/candidates-router.js');
const volunteersRouter = require('./apis/routers/volunteer-router.js');
const locationRouter = require('./apis/routers/event-location-router.js');
const fundRouter = require('./apis/routers/funds-router.js');
const jobApplicationRouter = require('./apis/routers/job-application-router.js');
const volParticipationRouter = require('./apis/routers/event-participation-router.js');
const collaboratorsRouter = require('./apis/routers/collaborators-router.js')
const app = express();
const PORT = 8081;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/blogs', blogRouter);


app.use('/events', eventRouter);

app.use('/partners', partnerRouter);
app.use('/projects', projectRouter);
app.use('/news', newsRouter);
app.use('/joboffer', jobofferRouter);
app.use('/cands', candidatesRouter);
app.use('/volunteer', volunteersRouter);
app.use('/locations', locationRouter);
app.use('/funds', fundRouter);
app.use('/jobApplication', jobApplicationRouter);
app.use('/volParticipation', volParticipationRouter);
app.use('/collaborators', collaboratorsRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
