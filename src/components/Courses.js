import React from 'react';
import { Table, Divider, Tag } from 'antd';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import 'antd/dist/antd.css'


const columns = [{
  title: 'Book Title',
  dataIndex: 'title',
  key: 'title',
  render: text => <a>{text}</a>,
}, {
  title: 'Author',
  dataIndex: 'author',
  key: 'author',
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
}, {
  title: 'Topic',
  key: 'topic',
  dataIndex: 'topic',
  render: topic => (
    <span>
      { <Tag color="blue" key={topic}>{topic}</Tag>}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a>Read</a>
      <Divider type="vertical" />
      <a>Delete</a>
    </span>
  ),
}];

const Courses = () => (
  <Query
    query={gql`
      {
        allCourses {
          id
          title
          author
          description
          topic
          url
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( {`${error}`}</p>;
      // return data.allCourses.map(({ id, title, author, description, topic, url }) => (
      //   <div key={id}>
      //     <p>{`${title} by ${author}`}</p>
      //     <p>The topic is {`${topic}`}</p>
      //     <p>This Books is about: {`${description}`}</p>
      //     <Table columns={columns} dataSource={data.allCourses} />
      //   </div>
        
      // ));
        return (
          <div>
            <Table columns={columns} dataSource={data.allCourses} />
          </div>
        )
    }}
  </Query>    
);
export default Courses;