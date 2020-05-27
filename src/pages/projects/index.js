/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from '../../components/Layout'
import ProjectRoll from '../../components/ProjectRoll'

const ProjectIndexPage = () => {
    return (
      <Layout>
        <div>
          <h1>
            Projects
          </h1>
        </div>
        <section>
            <div>
              <ProjectRoll />
            </div>
        </section>
      </Layout>
    )
}

export default ProjectIndexPage;


