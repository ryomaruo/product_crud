<?php
namespace App\Repositories;

interface CrudRepositoryInterface
{
    public function fetchAll();

    public function fetch($id);

    public function create(array $data);

    public function update(array $data, $id);

    public function delete($id);
}
