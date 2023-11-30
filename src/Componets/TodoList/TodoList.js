import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Button, Input, UnorderedList, ListItem, Text, VStack, IconButton } from "@chakra-ui/react";
import { CheckSquare, Delete } from "react-feather";

import "./TodoList.css";

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <UnorderedList>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </UnorderedList>
  );
};

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <ListItem
      textDecoration={task.completed ? "line-through" : "none"}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={4}
    >
      <VStack>
        <Text fontWeight="bold" textDecoration={task.completed ? "line-through" : "none"}>
          {task.name}
        </Text>
        {task.deadline && (
          <Text fontSize="sm" color="gray.500">
            Deadline: {task.deadline}
          </Text>
        )}
      </VStack>
      <Box>
        <IconButton
          icon={<CheckSquare />}
          onClick={handleComplete}
          colorScheme="green"
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
          marginRight={2}
        />
        <IconButton
          icon={<Delete />}
          onClick={handleDelete}
          colorScheme="red"
          aria-label="Delete task"
          marginRight={2}
        />
      </Box>
    </ListItem>
  );
};

const TaskForm = ({ addTask }) => {
  const initialValues = {
    taskName: "",
    taskDeadline: ""
  };

  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [error]);

  const handleSubmit = (values, { resetForm }) => {
    if (values.taskName.trim() !== "") {
      // Validar la fecha actual
      const currentDate = new Date();
      const selectedDate = new Date(values.taskDeadline);

      if (selectedDate < currentDate) {
        setError("Date must be after today.");
        return;
      }

      addTask(values.taskName, values.taskDeadline);
      resetForm();
    }
  };

  const validate = (values) => {
    const errors = {};

    if (values.taskName.trim() === "") {
      errors.taskName = "Task name is required";
    }

    return errors;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
      <Form>
        <VStack spacing={4} align="stretch">
          <Field
            type="text"
            name="taskName"
            placeholder="Task name"
            as={Input}
          />
          <ErrorMessage name="taskName" component={Text} color="red.500" fontSize="sm" />
          
          <Field
            type="date"
            name="taskDeadline"
            placeholder="Deadline (optional)"
            as={Input}
            aria-label="Deadline"
          />
          {error && (
            <Text fontSize="sm" color="red.500" mb={2}>
              {error}
            </Text>
          )}
          <Text fontSize="sm" color="gray.500" mb={2}>
            *Optional field: Task deadline
          </Text>

          <Button type="submit" colorScheme="blue">
            Add task
          </Button>
        </VStack>
      </Form>
    </Formik>
  );
};

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName, taskDeadline) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      deadline: taskDeadline,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Box
      mx="auto"
      mt={8}
      className="todo-list-container"
      bgImage="url('/Img/hoja_cuaderno.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      p={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="34rem" // Ancho fijo de la imagen
      height={`calc(90vh + ${tasks.length * 2}rem)`} // Ajusta el valor 4rem según tus necesidades
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Todo List
      </Text>
      <TaskForm addTask={addTask} />
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ) : (
        <Text fontSize="lg" color="gray.500">
          No tasks to do.
        </Text>
      )}
    </Box>
  );
}
