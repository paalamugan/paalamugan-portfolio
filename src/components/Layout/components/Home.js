import React from 'react';
import PropTypes from 'prop-types';

import '../../../assets/scss/main.scss';

import { Header, MetaData, getMetaImageUrls } from '../../Common';
import Layout from './Layout';

const Home = ({ data, location, children }) => {

  // Add meta title and description for this page here to overwrite the site meta data as set in the config
  const title = data.meta.title;
  const description = data.meta.description;
  const imageUrl = getMetaImageUrls();

  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="website"
        title={title}
        description={description}
        image={imageUrl}
      />
      <Layout data={data}>
        <Header {...data.header} footer={data.footer} />
        {children}
      </Layout>
    </>
  )
}

Home.propTypes = {
  data: PropTypes.any,
  location: PropTypes.any,
  children: PropTypes.node.isRequired,
}

export default Home
