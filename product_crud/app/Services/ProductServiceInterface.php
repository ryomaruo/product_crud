<?php
namespace App\Services;

/**
 * Interface ProductServiceInterface
 * @package Product\Services
 */
interface ProductServiceInterface
{
    /**
     * 単体取得
     * @return mixed
     */
    public function fetch($id);

    /**
     * 一覧取得
     * @return mixed
     */
    public function fetchList();

    /**
     * 保存
     * @param $input
     * @param $id | null
     * @return $id | null
     */
    public function save(Request $request, $id=null);

    /**
     * 削除
     * @param $id
     * @return $id
     */
    public function delete($id);

    /**
     * エンティティ作成
     * @return $entity
     */
    public function createEntity();
}
